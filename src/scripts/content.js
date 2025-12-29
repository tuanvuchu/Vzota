document.addEventListener(
  "visibilitychange",
  function (e) {
    e.stopImmediatePropagation();
  },
  true
);

const targetAPIs = [
  "api/VipPackage/GetMyPackage",
  "api/PayAsGoPayment/GetCurrentPoint",
  "api/v1/student-practice/can-attempt-exam",
  "api/v1/support-tool/request-export-docx",
  "api/v1/support-tool/check-using-resource",
];

const handlers = [
  {
    key: "GetMyPackage",
    apply: (json) => {
      json.data.obj = {
        ...json.data.obj,
        vipPackage: { totalDevices: 1 },
        vipSubscriptionObj: {
          startTime: "2004-08-02T00:00:00",
          endTime: "2104-08-02T00:00:00",
        },
        subscriptionHistories: [
          {
            createdAt: "2004-08-02T00:00:00",
            packageName: "Azota Teacher Vip vĩnh viễn",
          },
          {
            createdAt: "2004-08-02T00:00:00",
            packageName: "Azota Student Vip vĩnh viễn",
          },
        ],
        isVipTeacher: true,
        isVipStudent: true,
      };
    },
  },
  {
    key: "GetCurrentPoint",
    apply: (json) => {
      json.data = {
        ...json.data,
        totalPoint: 282004,
        canUseExportExcel50: true,
        canUseExportExcel50ByTime: true,
      };
    },
  },
  {
    key: "can-attempt-exam",
    apply: (json) => {
      json.value = true;
    },
  },
  {
    key: "request-export-docx",
    apply: (json) => {
      json.value = true;
    },
  },
  {
    key: "check-using-resource",
    apply: (json) => {
      json.currentPoint = 282004;
      json.canUsing = true;
    },
  },
];

const originalOpen = XMLHttpRequest.prototype.open;
const originalSend = XMLHttpRequest.prototype.send;

XMLHttpRequest.prototype.open = function (method, url, ...rest) {
  this._isTargetApi = targetAPIs.some((target) => url.includes(target));
  this._currentUrl = url;
  return originalOpen.call(this, method, url, ...rest);
};

XMLHttpRequest.prototype.send = function (...args) {
  const originalOnReadyStateChange = this.onreadystatechange;

  this.onreadystatechange = function (...cbArgs) {
    if (this._isTargetApi && this.readyState === 4 && this.status === 200) {
      try {
        let json = JSON.parse(this.responseText);
        handlers.forEach((p) => {
          if (this._currentUrl.includes(p.key)) {
            try {
              p.apply(json);
            } catch (error) {
              console.error(p.key, error);
            }
          }
        });

        Object.defineProperty(this, "responseText", {
          value: JSON.stringify(json),
        });
        Object.defineProperty(this, "response", { value: json });
      } catch (error) {
        console.error(error);
      }
    }

    if (originalOnReadyStateChange) {
      return originalOnReadyStateChange.apply(this, cbArgs);
    }
  };

  return originalSend.apply(this, args);
};
