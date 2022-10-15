(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver(e=>{for(const u of e)if(u.type==="childList")for(const B of u.addedNodes)B.tagName==="LINK"&&B.rel==="modulepreload"&&t(B)}).observe(document,{childList:!0,subtree:!0});function i(e){const u={};return e.integrity&&(u.integrity=e.integrity),e.referrerpolicy&&(u.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?u.credentials="include":e.crossorigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function t(e){if(e.ep)return;e.ep=!0;const u=i(e);fetch(e.href,u)}})();/*! Element Plus v2.2.18 */var H={name:"zh-cn",el:{colorpicker:{confirm:"\u786E\u5B9A",clear:"\u6E05\u7A7A"},datepicker:{now:"\u6B64\u523B",today:"\u4ECA\u5929",cancel:"\u53D6\u6D88",clear:"\u6E05\u7A7A",confirm:"\u786E\u5B9A",selectDate:"\u9009\u62E9\u65E5\u671F",selectTime:"\u9009\u62E9\u65F6\u95F4",startDate:"\u5F00\u59CB\u65E5\u671F",startTime:"\u5F00\u59CB\u65F6\u95F4",endDate:"\u7ED3\u675F\u65E5\u671F",endTime:"\u7ED3\u675F\u65F6\u95F4",prevYear:"\u524D\u4E00\u5E74",nextYear:"\u540E\u4E00\u5E74",prevMonth:"\u4E0A\u4E2A\u6708",nextMonth:"\u4E0B\u4E2A\u6708",year:"\u5E74",month1:"1 \u6708",month2:"2 \u6708",month3:"3 \u6708",month4:"4 \u6708",month5:"5 \u6708",month6:"6 \u6708",month7:"7 \u6708",month8:"8 \u6708",month9:"9 \u6708",month10:"10 \u6708",month11:"11 \u6708",month12:"12 \u6708",weeks:{sun:"\u65E5",mon:"\u4E00",tue:"\u4E8C",wed:"\u4E09",thu:"\u56DB",fri:"\u4E94",sat:"\u516D"},months:{jan:"\u4E00\u6708",feb:"\u4E8C\u6708",mar:"\u4E09\u6708",apr:"\u56DB\u6708",may:"\u4E94\u6708",jun:"\u516D\u6708",jul:"\u4E03\u6708",aug:"\u516B\u6708",sep:"\u4E5D\u6708",oct:"\u5341\u6708",nov:"\u5341\u4E00\u6708",dec:"\u5341\u4E8C\u6708"}},select:{loading:"\u52A0\u8F7D\u4E2D",noMatch:"\u65E0\u5339\u914D\u6570\u636E",noData:"\u65E0\u6570\u636E",placeholder:"\u8BF7\u9009\u62E9"},cascader:{noMatch:"\u65E0\u5339\u914D\u6570\u636E",loading:"\u52A0\u8F7D\u4E2D",placeholder:"\u8BF7\u9009\u62E9",noData:"\u6682\u65E0\u6570\u636E"},pagination:{goto:"\u524D\u5F80",pagesize:"\u6761/\u9875",total:"\u5171 {total} \u6761",pageClassifier:"\u9875",deprecationWarning:"\u4F60\u4F7F\u7528\u4E86\u4E00\u4E9B\u5DF2\u88AB\u5E9F\u5F03\u7684\u7528\u6CD5\uFF0C\u8BF7\u53C2\u8003 el-pagination \u7684\u5B98\u65B9\u6587\u6863"},messagebox:{title:"\u63D0\u793A",confirm:"\u786E\u5B9A",cancel:"\u53D6\u6D88",error:"\u8F93\u5165\u7684\u6570\u636E\u4E0D\u5408\u6CD5!"},upload:{deleteTip:"\u6309 delete \u952E\u53EF\u5220\u9664",delete:"\u5220\u9664",preview:"\u67E5\u770B\u56FE\u7247",continue:"\u7EE7\u7EED\u4E0A\u4F20"},table:{emptyText:"\u6682\u65E0\u6570\u636E",confirmFilter:"\u7B5B\u9009",resetFilter:"\u91CD\u7F6E",clearFilter:"\u5168\u90E8",sumText:"\u5408\u8BA1"},tree:{emptyText:"\u6682\u65E0\u6570\u636E"},transfer:{noMatch:"\u65E0\u5339\u914D\u6570\u636E",noData:"\u65E0\u6570\u636E",titles:["\u5217\u8868 1","\u5217\u8868 2"],filterPlaceholder:"\u8BF7\u8F93\u5165\u641C\u7D22\u5185\u5BB9",noCheckedFormat:"\u5171 {total} \u9879",hasCheckedFormat:"\u5DF2\u9009 {checked}/{total} \u9879"},image:{error:"\u52A0\u8F7D\u5931\u8D25"},pageHeader:{title:"\u8FD4\u56DE"},popconfirm:{confirmButtonText:"\u786E\u5B9A",cancelButtonText:"\u53D6\u6D88"}}};const S=[{title:"1.\u5173\u4E8E\u4EBA\u751F\u89C2\uFF0C\u6211\u7684\u5185\u5FC3\u5176\u5B9E\u662F\uFF1A",options:[{value:"A",label:"A.\u5E0C\u671B\u80FD\u591F\u6709\u5C3D\u91CF\u591A\u7684\u4EBA\u751F\u4F53\u9A8C\uFF0C\u6240\u4EE5\u4F1A\u6709\u975E\u5E38\u591A\u6837\u5316\u7684\u60F3\u6CD5\u3002"},{value:"B",label:"B.\u5728\u5C0F\u5FC3\u5408\u7406\u7684\u57FA\u7840\u4E0A\uFF0C\u8C28\u614E\u5730\u786E\u5B9A\u81EA\u5DF1\u7684\u76EE\u6807\uFF0C\u4E00\u65E6\u786E\u5B9A\u4F1A\u575A\u5B9A\u4E0D\u79FB\u5730\u53BB\u505A\u3002"},{value:"C",label:"C.\u66F4\u52A0\u6CE8\u91CD\u7684\u662F\u53D6\u5F97\u4E00\u5207\u6709\u53EF\u80FD\u7684\u6210\u5C31\u3002"},{value:"D",label:"D.\u5B81\u613F\u5254\u9664\u98CE\u9669\u800C\u4EAB\u53D7\u5E73\u9759\u6216\u73B0\u72B6\u3002"}]},{title:"2.\u5982\u679C\u722C\u5C71\u65C5\u6E38\uFF0C\u5728\u4E0B\u5C71\u56DE\u6765\u7684\u8DEF\u7EBF\u9009\u62E9\u4E0A\uFF0C\u6211\u66F4\u5728\u4E4E\uFF1A",options:[{value:"A",label:"A.\u597D\u73A9\u6709\u8DA3\uFF0C\u6240\u4EE5\u5B81\u613F\u65B0\u8DEF\u7EBF\u56DE\u5DE2\u3002"},{value:"B",label:"B.\u5B89\u5168\u7A33\u59A5\uFF0C\u6240\u4EE5\u5B81\u613F\u539F\u8DEF\u7EBF\u8FD4\u56DE\u3002"},{value:"C",label:"C.\u6311\u6218\u56F0\u96BE\uFF0C\u6240\u4EE5\u5B81\u613F\u65B0\u8DEF\u7EBF\u56DE\u5DE2\u3002"},{value:"D",label:"D.\u65B9\u4FBF\u7701\u5FC3\uFF0C\u6240\u4EE5\u5B81\u613F\u539F\u8DEF\u7EBF\u8FD4\u56DE\u3002"}]},{title:"3.\u901A\u5E38\u5728\u8868\u8FBE\u4E00\u4EF6\u4E8B\u60C5\u4E0A\uFF0C\u6211\u66F4\u770B\u91CD\uFF1A",options:[{value:"A",label:"A.\u8BF4\u8BDD\u7ED9\u5BF9\u65B9\u611F\u53D7\u5230\u7684\u5F3A\u70C8\u5370\u8C61\u3002"},{value:"B",label:"B.\u8BF4\u8BDD\u8868\u8FF0\u7684\u51C6\u786E\u7A0B\u5EA6\u3002"},{value:"C",label:"C.\u8BF4\u8BDD\u6240\u80FD\u8FBE\u5230\u7684\u6700\u7EC8\u76EE\u6807\u3002"},{value:"D",label:"D.\u8BF4\u8BDD\u540E\u5468\u56F4\u7684\u4EBA\u9645\u611F\u53D7\u662F\u5426\u8212\u670D\u3002"}]},{title:"4.\u5728\u751F\u547D\u7684\u5927\u591A\u6570\u65F6\u5019\uFF0C\u6211\u7684\u5185\u5FC3\u5176\u5B9E\u66F4\u52A0\u6B23\u559C\u4E8E\u548C\u5E0C\u671B\u591A\u4E9B\uFF1A",options:[{value:"A",label:"A.\u523A\u6FC0\u3002"},{value:"B",label:"B.\u5B89\u5168\u3002"},{value:"C",label:"C.\u6311\u6218\u3002"},{value:"D",label:"D.\u7A33\u5B9A\u3002"}]},{title:"5.\u6211\u8BA4\u4E3A\u81EA\u5DF1\u5728\u60C5\u611F\u4E0A\u7684\u57FA\u672C\u7279\u70B9\u662F\uFF1A",options:[{value:"A",label:"A.\u60C5\u7EEA\u591A\u53D8\uFF0C\u7ECF\u5E38\u60C5\u7EEA\u6CE2\u52A8\u3002"},{value:"B",label:"B.\u5916\u8868\u4E0A\u81EA\u6211\u6291\u5236\u80FD\u529B\u5F3A\uFF0C\u4F46\u5185\u5FC3\u611F\u60C5\u8D77\u4F0F\u6781\u5927\uFF0C\u4E00\u65E6\u632B\u4F24\u96BE\u4EE5\u5E73\u590D\u3002"},{value:"C",label:"C.\u611F\u60C5\u4E0D\u62D6\u6CE5\u5E26\u6C34\uFF0C\u8F83\u4E3A\u76F4\u63A5\uFF0C\u53EA\u662F\u4E00\u65E6\u4E0D\u7A33\u5B9A\uFF0C\u5BB9\u6613\u6FC0\u52A8\u548C\u53D1\u6012\u3002"},{value:"D",label:"D.\u5929\u6027\u60C5\u7EEA\u56DB\u5E73\u516B\u7A33\u3002"}]},{title:"6.\u6211\u8BA4\u4E3A\u81EA\u5DF1\u5728\u6574\u4E2A\u4EBA\u751F\u4E2D\uFF0C\u9664\u4E86\u5DE5\u4F5C\u4EE5\u5916\uFF0C\u5728\u63A7\u5236\u6B32\u4E0A\u9762\uFF0C\u6211\uFF1A",options:[{value:"A",label:"A.\u6CA1\u6709\u63A7\u5236\u6B32\uFF0C\u53EA\u6709\u611F\u67D3\u5E26\u52A8\u4ED6\u4EBA\u7684\u6B32\u671B\uFF0C\u4F46\u81EA\u63A7\u80FD\u529B\u4E0D\u7B97\u5F3A\u3002"},{value:"B",label:"B.\u7528\u89C4\u5219\u6765\u4FDD\u6301\u6211\u5BF9\u81EA\u5DF1\u7684\u63A7\u5236\u548C\u5BF9\u4ED6\u4EBA\u7684\u8981\u6C42\u3002"},{value:"C",label:"C.\u5185\u5FC3\u662F\u6709\u63A7\u5236\u6B32\u548C\u5E0C\u671B\u522B\u4EBA\u670D\u4ECE\u6211\u7684\u3002"},{value:"D",label:"D.\u4E0D\u4F1A\u6709\u4EFB\u4F55\u5174\u8DA3\u53BB\u5F71\u54CD\u522B\u4EBA\uFF0C\u4E5F\u4E0D\u613F\u610F\u522B\u4EBA\u6765\u7BA1\u63A7\u6211\u3002"}]},{title:"7.\u5F53\u4E0E\u60C5\u4EBA\u4EA4\u5F80\u65F6\uFF0C\u6211\u503E\u5411\u4E8E\u7740\u91CD\uFF1A",options:[{value:"A",label:"A.\u5174\u8DA3\u4E0A\u7684\u76F8\u5BB9\u6027\uFF0C\u4E00\u8D77\u505A\u559C\u6B22\u7684\u4E8B\u60C5\uFF0C\u5BF9\u4ED6\u7684\u7231\u610F\u6EA2\u4E8E\u8A00\u8868\u3002"},{value:"B",label:"B.\u601D\u60F3\u4E0A\u7684\u76F8\u5BB9\u6027\uFF0C\u4F53\u8D34\u5165\u5FAE\uFF0C\u5BF9\u4ED6\u7684\u9700\u6C42\u5F88\u654F\u611F\u3002"},{value:"C",label:"C.\u667A\u6167\u4E0A\u7684\u76F8\u5BB9\u6027\uFF0C\u6C9F\u901A\u91CD\u8981\u7684\u60F3\u6CD5\uFF0C\u5BA2\u89C2\u5730\u8BA8\u8BBA\u8FA9\u8BBA\u4E8B\u60C5\u3002"},{value:"D",label:"D.\u548C\u8C10\u4E0A\u7684\u76F8\u5BB9\u6027\uFF0C\u5305\u5BB9\u7406\u89E3\u53E6\u4E00\u534A\u7684\u4E0D\u540C\u89C2\u70B9\u3002"}]},{title:"8.\u5728\u4EBA\u9645\u4EA4\u5F80\u65F6\uFF0C\u6211\uFF1A",options:[{value:"A",label:"A.\u5FC3\u6001\u5F00\u653E\uFF0C\u53EF\u4EE5\u5FEB\u901F\u5EFA\u7ACB\u8D77\u53CB\u8C0A\u548C\u4EBA\u9645\u5173\u7CFB\u3002"},{value:"B",label:"B.\u975E\u5E38\u5BA1\u614E\u7F13\u6162\u5730\u8FDB\u5165\uFF0C\u4E00\u65E6\u8BA4\u4E3A\u662F\u670B\u53CB\uFF0C\u4FBF\u957F\u4E45\u5730\u7EF4\u6301\u3002"},{value:"C",label:"C.\u5E0C\u671B\u5728\u4EBA\u9645\u5173\u7CFB\u4E2D\u5360\u636E\u4E3B\u5BFC\u5730\u4F4D\u3002"},{value:"D",label:"D.\u987A\u5176\u81EA\u7136\uFF0C\u4E0D\u6E29\u4E0D\u706B\uFF0C\u76F8\u5BF9\u88AB\u52A8\u3002"}]},{title:"9.\u6211\u8BA4\u4E3A\u81EA\u5DF1\u5927\u591A\u6570\u65F6\u5019\u66F4\u662F\uFF1A",options:[{value:"A",label:"A.\u611F\u60C5\u4E30\u5BCC\u7684\u4EBA\u3002"},{value:"B",label:"B.\u601D\u8DEF\u6E05\u6670\u7684\u4EBA\u3002"},{value:"C",label:"C.\u529E\u4E8B\u9EBB\u5229\u7684\u4EBA\u3002"},{value:"D",label:"D.\u5FC3\u6001\u5E73\u9759\u7684\u4EBA\u3002"}]},{title:"10.\u901A\u5E38\u6211\u5B8C\u6210\u4EFB\u52A1\u7684\u65B9\u5F0F\u662F\uFF1A",options:[{value:"A",label:"A.\u7ECF\u5E38\u4F1A\u8D76\u5728\u6700\u540E\u671F\u9650\u524D\u5B8C\u6210\u3002"},{value:"B",label:"B.\u81EA\u5DF1\u505A\uFF0C\u7CBE\u786E\u5730\u505A\uFF0C\u4E0D\u8981\u9EBB\u70E6\u522B\u4EBA\u3002"},{value:"C",label:"C.\u5148\u505A\uFF0C\u5FEB\u901F\u505A\u3002"},{value:"D",label:"D.\u4F7F\u7528\u4F20\u7EDF\u7684\u65B9\u6CD5\uFF0C\u9700\u8981\u65F6\u4ECE\u4ED6\u4EBA\u5904\u5F97\u5230\u5E2E\u5FD9\u3002"}]},{title:"11.\u5982\u679C\u6709\u4EBA\u6DF1\u6DF1\u60F9\u607C\u6211\u65F6\uFF0C\u6211\uFF1A",options:[{value:"A",label:"A.\u5185\u5FC3\u611F\u5230\u53D7\u4F24\uFF0C\u8BA4\u4E3A\u6CA1\u6709\u539F\u8C05\u7684\u53EF\u80FD\uFF0C\u53EF\u6700\u7EC8\u5F88\u591A\u65F6\u5019\u8FD8\u662F\u4F1A\u539F\u8C05\u5BF9\u65B9\u3002"},{value:"B",label:"B.\u6DF1\u6DF1\u611F\u5230\u6124\u6012\uFF0C\u5982\u6B64\u4E4B\u6DF1\u600E\u53EF\u5FD8\u8BB0\uFF1F\u6211\u4F1A\u7262\u8BB0\uFF0C\u540C\u65F6\u672A\u6765\u5B8C\u5168\u907F\u5F00\u90A3\u4E2A\u5BB6\u4F19\u3002"},{value:"C",label:"C.\u4F1A\u706B\u5192\u4E09\u4E08\uFF0C\u5E76\u4E14\u5185\u5FC3\u671F\u671B\u6709\u673A\u4F1A\u72E0\u72E0\u5730\u56DE\u5E94\u6253\u51FB\u3002"},{value:"D",label:"D.\u6211\u4F1A\u907F\u514D\u644A\u724C\uFF0C\u56E0\u4E3A\u90A3\u8FD8\u4E0D\u5230\u90A3\u4E2A\u5730\u6B65\uFF0C\u90A3\u4E2A\u4EBA\u591A\u884C\u4E0D\u4E49\u5FC5\u81EA\u6BD9\uFF0C\u6216\u8005\u81EA\u5DF1\u518D\u53BB\u627E\u65B0\u670B\u53CB\u3002"}]},{title:"12.\u5728\u4EBA\u9645\u5173\u7CFB\u4E2D\uFF0C\u6211\u6700\u5728\u610F\u7684\u662F\uFF1A",options:[{value:"A",label:"A.\u5F97\u5230\u4ED6\u4EBA\u7684\u8D5E\u7F8E\u548C\u6B22\u8FCE\u3002"},{value:"B",label:"B.\u5F97\u5230\u4ED6\u4EBA\u7684\u7406\u89E3\u548C\u6B23\u8D4F\u3002"},{value:"C",label:"C.\u5F97\u5230\u4ED6\u4EBA\u7684\u611F\u6FC0\u548C\u5C0A\u656C\u3002"},{value:"D",label:"D.\u5F97\u5230\u4ED6\u4EBA\u7684\u5C0A\u91CD\u548C\u63A5\u7EB3\u3002"}]},{title:"13.\u5728\u5DE5\u4F5C\u4E0A\uFF0C\u6211\u8868\u73B0\u51FA\u6765\u66F4\u591A\u7684\u662F\uFF1A",options:[{value:"A",label:"A.\u5145\u6EE1\u70ED\u5FF1\uFF0C\u6709\u5F88\u591A\u60F3\u6CD5\u4E14\u5F88\u6709\u7075\u6027\u3002"},{value:"B",label:"B.\u5FC3\u601D\u7EC6\u817B\uFF0C\u5B8C\u7F8E\u7CBE\u786E\uFF0C\u800C\u4E14\u4E3A\u4EBA\u53EF\u9760\u3002"},{value:"C",label:"C.\u575A\u5F3A\u800C\u76F4\u622A\u4E86\u5F53\uFF0C\u800C\u4E14\u6709\u63A8\u52A8\u529B\u3002"},{value:"D",label:"D.\u6709\u8010\u5FC3\uFF0C\u9002\u5E94\u6027\u5F3A\u800C\u4E14\u5584\u4E8E\u534F\u8C03\u3002"}]},{title:"14.\u6211\u8FC7\u5F80\u7684\u8001\u5E08\u6700\u6709\u53EF\u80FD\u5BF9\u6211\u7684\u8BC4\u4EF7\u662F\uFF1A",options:[{value:"A",label:"A.\u60C5\u7EEA\u8D77\u4F0F\u5927\uFF0C\u5584\u4E8E\u8868\u8FBE\u548C\u6292\u53D1\u60C5\u611F\u3002"},{value:"B",label:"B.\u4E25\u683C\u4FDD\u62A4\u81EA\u5DF1\u7684\u79C1\u5BC6\uFF0C\u6709\u65F6\u4F1A\u663E\u5F97\u5B64\u72EC\u6216\u662F\u4E0D\u5408\u7FA4\u3002"},{value:"C",label:"C.\u52A8\u4F5C\u654F\u6377\u53C8\u72EC\u7ACB\uFF0C\u5E76\u4E14\u559C\u6B22\u81EA\u5DF1\u505A\u4E8B\u60C5\u3002"},{value:"D",label:"D.\u770B\u8D77\u6765\u5B89\u7A33\u8F7B\u677E\uFF0C\u53CD\u5E94\u5EA6\u504F\u4F4E\uFF0C\u6BD4\u8F83\u6E29\u548C\u3002"}]},{title:"15.\u670B\u53CB\u5BF9\u6211\u7684\u8BC4\u4EF7\u6700\u6709\u53EF\u80FD\u7684\u662F\uFF1A",options:[{value:"A",label:"A.\u559C\u6B22\u5BF9\u670B\u53CB\u8FF0\u8BF4\u4E8B\u60C5\uFF0C\u4E5F\u6709\u80FD\u91CF\u8BF4\u670D\u522B\u4EBA\u53BB\u505A\u4E8B\u3002"},{value:"B",label:"B.\u80FD\u591F\u63D0\u51FA\u5F88\u591A\u5468\u5168\u7684\u95EE\u9898\uFF0C\u800C\u4E14\u9700\u8981\u8BB8\u591A\u7CBE\u7EC6\u7684\u89E3\u8BF4\u3002"},{value:"C",label:"C.\u613F\u610F\u76F4\u8A00\u8868\u8FBE\u60F3\u6CD5\uFF0C\u6709\u65F6\u4F1A\u76F4\u7387\u800C\u7280\u5229\u5730\u8C08\u8BBA\u4E0D\u559C\u6B22\u7684\u4EBA\u3001\u4E8B\u3001\u7269\u3002"},{value:"D",label:"D.\u901A\u5E38\u4E0E\u4ED6\u4EBA\u4E00\u8D77\u662F\u591A\u542C\u5C11\u8BF4\u3002"}]},{title:"16.\u5728\u5E2E\u52A9\u4ED6\u4EBA\u7684\u95EE\u9898\u4E0A\uFF0C\u6211\u503E\u5411\u4E8E\uFF1A",options:[{value:"A",label:"A.\u591A\u4E00\u4E8B\u4E0D\u5982\u5C11\u4E00\u4E8B\uFF0C\u4F46\u82E5\u4ED6\u6765\u627E\u6211\uFF0C\u90A3\u6211\u5B9A\u4F1A\u5E2E\u4ED6\u3002"},{value:"B",label:"B.\u503C\u5F97\u5E2E\u52A9\u7684\u4EBA\u5E94\u8BE5\u5E2E\u52A9\uFF0C\u9526\u4E0A\u6DFB\u82B1\u72B9\u80DC\u96EA\u4E2D\u9001\u70AD\u3002"},{value:"C",label:"C.\u65E0\u5173\u8005\u4F55\u5FC5\u8981\u5E2E\uFF0C\u4F46\u6211\u82E5\u627F\u8BFA\uFF0C\u5FC5\u6B32\u5B8C\u4E4B\u800C\u540E\u91CA\u7136\u3002"},{value:"D",label:"D.\u867D\u65E0\u82F1\u96C4\u6253\u864E\u4E4B\u80C6\uFF0C\u5374\u6709\u81EA\u544A\u594B\u52C7\u4E4B\u5FC3\u3002"}]},{title:"17.\u9762\u5BF9\u4ED6\u4EBA\u5BF9\u81EA\u5DF1\u7684\u8D5E\u7F8E\uFF0C\u6211\u7684\u672C\u80FD\u53CD\u5E94\u662F\uFF1A",options:[{value:"A",label:"A.\u6CA1\u6709\u4E5F\u65E0\u6240\u8C13\uFF0C\u7279\u522B\u6B23\u559C\u90A3\u4E5F\u4E0D\u81F3\u4E8E\u3002"},{value:"B",label:"B.\u6211\u4E0D\u9700\u8981\u90A3\u4E9B\u65E0\u5173\u75DB\u75D2\u7684\u8D5E\u7F8E\uFF0C\u5B81\u53EF\u4ED6\u4EEC\u6B23\u8D4F\u6211\u7684\u80FD\u529B\u3002"},{value:"C",label:"C.\u6709\u70B9\u6000\u7591\u5BF9\u65B9\u662F\u5426\u8BA4\u771F\u6216\u8005\u7ACB\u5373\u56DE\u907F\u4F17\u4EBA\u7684\u5173\u6CE8\u3002"},{value:"D",label:"D.\u8D5E\u7F8E\u603B\u662F\u4E00\u4EF6\u4EE4\u4EBA\u5FC3\u60C5\u975E\u5E38\u6109\u60A6\u7684\u4E8B\u3002"}]},{title:"18.\u9762\u5BF9\u751F\u6D3B\u7684\u73B0\u72B6\uFF0C\u6211\u7684\u884C\u4E3A\u4E60\u60EF\u66F4\u52A0\u503E\u5411\u4E8E\uFF1A",options:[{value:"A",label:"A.\u5916\u9762\u600E\u4E48\u53D8\u5316\u4E0E\u6211\u65E0\u5173\uFF0C\u6211\u89C9\u5F97\u81EA\u5DF1\u8FD9\u6837\u8FD8\u4E0D\u9519\u3002"},{value:"B",label:"B.\u8FD9\u4E2A\u4E16\u754C\u5982\u679C\u6211\u6CA1\u4EC0\u4E48\u8FDB\u6B65\uFF0C\u522B\u4EBA\u5C31\u4F1A\u8FDB\u6B65\uFF0C\u6240\u4EE5\u6211\u9700\u8981\u4E0D\u505C\u5730\u524D\u8FDB\u3002"},{value:"C",label:"C.\u5728\u6240\u6709\u7684\u95EE\u9898\u672A\u53D1\u751F\u4E4B\u524D\uFF0C\u5C31\u5E94\u8BE5\u5C3D\u91CF\u60F3\u597D\u6240\u6709\u7684\u53EF\u80FD\u6027\u3002"},{value:"D",label:"D.\u6BCF\u5929\u7684\u751F\u6D3B\u5F00\u5FC3\u5FEB\u4E50\u6700\u91CD\u8981\u3002"}]},{title:"19.\u5BF9\u4E8E\u89C4\u5219\uFF0C\u6211\u5185\u5FC3\u7684\u6001\u5EA6\u662F\uFF1A",options:[{value:"A",label:"A.\u4E0D\u613F\u8FDD\u53CD\u89C4\u5219\uFF0C\u4F46\u53EF\u80FD\u56E0\u4E3A\u677E\u6563\u800C\u65E0\u6CD5\u8FBE\u5230\u89C4\u5219\u7684\u8981\u6C42\u3002"},{value:"B",label:"B.\u6253\u7834\u89C4\u5219\uFF0C\u5E0C\u671B\u7531\u81EA\u5DF1\u6765\u5236\u5B9A\u89C4\u5219\u800C\u4E0D\u662F\u9075\u5B88\u89C4\u5219\u3002"},{value:"C",label:"C.\u4E25\u683C\u9075\u5B88\u89C4\u5219\uFF0C\u5E76\u4E14\u7AED\u5C3D\u5168\u529B\u505A\u5230\u89C4\u5219\u5185\u7684\u6700\u597D\u3002"},{value:"D",label:"D.\u4E0D\u559C\u88AB\u89C4\u5219\u675F\u7F1A\uFF0C\u4E0D\u6309\u89C4\u5219\u51FA\u724C\u4F1A\u89C9\u5F97\u65B0\u9C9C\u6709\u8DA3\u3002"}]},{title:"20.\u6211\u8BA4\u4E3A\u81EA\u5DF1\u5728\u884C\u4E3A\u4E0A\u7684\u57FA\u672C\u7279\u70B9\u662F\uFF1A",options:[{value:"A",label:"A.\u6162\u6761\u65AF\u7406\uFF0C\u529E\u4E8B\u6309\u90E8\u5C31\u73ED\uFF0C\u80FD\u4E0E\u5468\u56F4\u7684\u4EBA\u534F\u8C03\u4E00\u81F4\u3002"},{value:"B",label:"B.\u76EE\u6807\u660E\u786E\uFF0C\u96C6\u4E2D\u7CBE\u529B\u4E3A\u5B9E\u73B0\u76EE\u6807\u800C\u52AA\u529B\uFF0C\u5584\u4E8E\u6293\u4F4F\u6838\u5FC3\u8981\u70B9\u3002"},{value:"C",label:"C.\u614E\u91CD\u5C0F\u5FC3\uFF0C\u4E3A\u505A\u597D\u9884\u9632\u53CA\u5584\u540E\uFF0C\u4F1A\u4E0D\u60DC\u4E00\u5207\u800C\u5C3D\u5FC3\u64CD\u52B3\u3002"},{value:"D",label:"D.\u4E30\u5BCC\u8DC3\u52A8\uFF0C\u4E0D\u559C\u6B22\u5236\u5EA6\u548C\u7EA6\u675F\uFF0C\u503E\u5411\u4E8E\u5FEB\u901F\u53CD\u5E94\u3002"}]},{title:"21.\u5728\u9762\u5BF9\u538B\u529B\u65F6\uFF0C\u6211\u6BD4\u8F83\u503E\u5411\u4E8E\u9009\u7528\uFF1A",options:[{value:"A",label:"A.\u773C\u4E0D\u89C1\u4E3A\u51C0\u5730\u5316\u89E3\u538B\u529B\u3002"},{value:"B",label:"B.\u538B\u529B\u8D8A\u5927\u62B5\u6297\u529B\u8D8A\u5927\u3002"},{value:"C",label:"C.\u548C\u522B\u4EBA\u8BB2\u4E5F\u4E0D\u4E00\u5B9A\u6709\u7528\uFF0C\u538B\u529B\u5728\u81EA\u5DF1\u7684\u5185\u5FC3\u6162\u6162\u5730\u5480\u56BC\u3002"},{value:"D",label:"D.\u672C\u80FD\u5730\u56DE\u907F\u538B\u529B\uFF0C\u56DE\u907F\u4E0D\u6389\u5C31\u7528\u5404\u79CD\u65B9\u6CD5\u6765\u5BA3\u6CC4\u51FA\u53BB\u3002"}]},{title:"22.\u5F53\u7ED3\u675F\u4E00\u6BB5\u523B\u9AA8\u94ED\u5FC3\u7684\u611F\u60C5\u65F6\uFF0C\u6211\u4F1A\uFF1A",options:[{value:"A",label:"A.\u975E\u5E38\u96BE\u53D7\uFF0C\u53EF\u662F\u65E5\u5B50\u603B\u8FD8\u662F\u8981\u8FC7\u7684\uFF0C\u65F6\u95F4\u4F1A\u51B2\u6DE1\u4E00\u5207\u7684\u3002"},{value:"B",label:"B.\u867D\u7136\u89C9\u5F97\u53D7\u4F24\uFF0C\u4F46\u4E00\u65E6\u4E0B\u5B9A\u51B3\u5FC3\uFF0C\u5C31\u4F1A\u52AA\u529B\u628A\u8FC7\u53BB\u7684\u5F71\u5B50\u6454\u6389\u3002"},{value:"C",label:"C.\u6DF1\u9677\u5728\u60B2\u4F24\u7684\u60C5\u7EEA\u4E2D\uFF0C\u5728\u76F8\u5F53\u957F\u7684\u65F6\u671F\u91CC\u96BE\u4EE5\u81EA\u62D4\uFF0C\u4E5F\u4E0D\u613F\u518D\u63A5\u53D7\u65B0\u7684\u4EBA\u3002"},{value:"D",label:"D.\u75DB\u4E0D\u6B32\u751F\uFF0C\u9700\u8981\u627E\u670B\u53CB\u503E\u8BC9\u6216\u8005\u627E\u6E20\u9053\u53D1\u6CC4\uFF0C\u5BFB\u6C42\u5316\u89E3\u4E4B\u9053\u3002"}]},{title:"23.\u9762\u5BF9\u4ED6\u4EBA\u7684\u503E\u8BC9\uFF0C\u6211\u56DE\u987E\u81EA\u5DF1\u5927\u591A\u65F6\u5019\u672C\u80FD\u4E0A\u503E\u5411\u4E8E\uFF1A",options:[{value:"A",label:"A.\u8BA4\u540C\u5E76\u7406\u89E3\u5BF9\u65B9\u611F\u53D7\u3002"},{value:"B",label:"B.\u505A\u51FA\u4E00\u4E9B\u5B9A\u8BBA\u6216\u5224\u65AD\u3002"},{value:"C",label:"C.\u7ED9\u4E88\u4E00\u4E9B\u5206\u6790\u6216\u63A8\u7406\u3002"},{value:"D",label:"D.\u53D1\u8868\u4E00\u4E9B\u8BC4\u8BBA\u6216\u610F\u89C1\u3002"}]},{title:"24.\u6211\u5728\u4EE5\u4E0B\u54EA\u4E2A\u7FA4\u4F53\u4E2D\u8F83\u611F\u6EE1\u8DB3\uFF1F",options:[{value:"A",label:"A.\u80FD\u5FC3\u5E73\u6C14\u548C\u6700\u7EC8\u5927\u5BB6\u8FBE\u6210\u4E00\u81F4\u7ED3\u8BBA\u7684\u3002"},{value:"B",label:"B.\u80FD\u5F7C\u6B64\u5C55\u5F00\u5145\u5206\u6FC0\u70C8\u7684\u8FA9\u8BBA\u3002"},{value:"C",label:"C.\u80FD\u8BE6\u7EC6\u8BA8\u8BBA\u4E8B\u60C5\u7684\u597D\u574F\u548C\u5F71\u54CD\u7684\u3002"},{value:"D",label:"D.\u80FD\u968F\u610F\u65E0\u62D8\u675F\u5730\u81EA\u7531\u6563\u8C08\uFF0C\u540C\u65F6\u53C8\u5F88\u5F00\u5FC3\u3002"}]},{title:"25.\u5728\u5185\u5FC3\u7684\u771F\u5B9E\u60F3\u6CD5\u91CC\uFF0C\u6211\u89C9\u5F97\u5DE5\u4F5C\uFF1A",options:[{value:"A",label:"A.\u5982\u679C\u4E0D\u5FC5\u6709\u538B\u529B\uFF0C\u53EF\u4EE5\u8BA9\u6211\u505A\u6211\u719F\u6089\u7684\u5DE5\u4F5C\u90A3\u5C31\u4E0D\u9519\u3002"},{value:"B",label:"B.\u5E94\u8BE5\u4EE5\u6700\u5FEB\u7684\u901F\u5EA6\u5B8C\u6210\uFF0C\u4E14\u4E89\u53D6\u53BB\u5B8C\u6210\u66F4\u591A\u7684\u4EFB\u52A1\u3002"},{value:"C",label:"C.\u8981\u4E48\u4E0D\u505A\uFF0C\u8981\u505A\u5C31\u505A\u5230\u6700\u597D\u3002"},{value:"D",label:"D.\u5982\u679C\u80FD\u5C06\u4E50\u8DA3\u878D\u5408\u5728\u91CC\u9762\u90A3\u5C31\u592A\u68D2\u4E86\uFF0C\u4E0D\u8FC7\u5982\u679C\u4E0D\u559C\u6B22\u7684\u5DE5\u4F5C\u5B9E\u5728\u6CA1\u52B2\u3002"}]},{title:"26.\u5982\u679C\u6211\u662F\u9886\u5BFC\uFF0C\u6211\u5185\u5FC3\u66F4\u5E0C\u671B\u5728\u90E8\u5C5E\u5FC3\u76EE\u4E2D\uFF0C\u6211\u662F\uFF1A",options:[{value:"A",label:"A.\u53EF\u4EE5\u4EB2\u8FD1\u7684\u548C\u5584\u4E8E\u4E3A\u4ED6\u4EEC\u7740\u60F3\u7684\u3002"},{value:"B",label:"B.\u6709\u5F88\u5F3A\u7684\u80FD\u529B\u548C\u5BCC\u6709\u9886\u5BFC\u529B\u7684\u3002"},{value:"C",label:"C.\u516C\u5E73\u516C\u6B63\u4E14\u8DB3\u4EE5\u4FE1\u8D56\u7684\u3002"},{value:"D",label:"D.\u88AB\u4ED6\u4EEC\u559C\u6B22\u5E76\u4E14\u89C9\u5F97\u5BCC\u6709\u611F\u53EC\u529B\u7684\u3002"}]},{title:"27.\u6211\u5E0C\u671B\u5F97\u5230\u7684\u8BA4\u540C\u65B9\u5F0F\u662F\uFF1A",options:[{value:"A",label:"A.\u65E0\u6240\u8C13\u522B\u4EBA\u662F\u5426\u8BA4\u540C\u3002"},{value:"B",label:"B.\u7CBE\u82F1\u7FA4\u4F53\u7684\u8BA4\u540C\u6700\u91CD\u8981\u3002"},{value:"C",label:"C.\u53EA\u8981\u6211\u8BA4\u540C\u7684\u4EBA\u6216\u8005\u6211\u5728\u4E4E\u7684\u4EBA\u7684\u8BA4\u540C\u5C31\u53EF\u4EE5\u4E86\u3002"},{value:"D",label:"D.\u5E0C\u671B\u5F97\u5230\u6240\u6709\u5927\u4F17\u7684\u8BA4\u540C\u3002"}]},{title:"28.\u5F53\u6211\u8FD8\u662F\u4E2A\u5B69\u5B50\u7684\u65F6\u5019\uFF0C\u6211\uFF1A",options:[{value:"A",label:"A.\u4E0D\u592A\u4F1A\u79EF\u6781\u5C1D\u8BD5\u65B0\u4E8B\u7269\uFF0C\u901A\u5E38\u6BD4\u8F83\u559C\u6B22\u65E7\u6709\u7684\u548C\u719F\u6089\u7684\u3002"},{value:"B",label:"B.\u662F\u5B69\u5B50\u738B\uFF0C\u5927\u5BB6\u7ECF\u5E38\u542C\u6211\u7684\u51B3\u5B9A\u3002"},{value:"C",label:"C.\u5BB3\u7F9E\u89C1\u751F\u4EBA\uFF0C\u6709\u610F\u8BC6\u5730\u56DE\u907F\u3002"},{value:"D",label:"D.\u8C03\u76AE\u53EF\u7231\uFF0C\u5728\u5927\u90E8\u5206\u7684\u60C5\u51B5\u4E0B\u662F\u4E50\u89C2\u800C\u53C8\u70ED\u5FC3\u7684\u3002"}]},{title:"29.\u5982\u679C\u6211\u662F\u7236\u6BCD\uFF0C\u6211\u4E5F\u8BB8\u662F\uFF1A",options:[{value:"A",label:"A.\u4E0D\u613F\u5E72\u6D89\u5B50\u5973\u6216\u8005\u5BB9\u6613\u88AB\u8BF4\u52A8\u7684\u3002"},{value:"B",label:"B.\u4E25\u5389\u7684\u6216\u8005\u76F4\u63A5\u7ED9\u4E88\u65B9\u5411\u6027\u6307\u70B9\u7684\u3002"},{value:"C",label:"C.\u7528\u884C\u52A8\u4EE3\u66FF\u8BED\u8A00\u6765\u8868\u793A\u5173\u7231\u6216\u8005\u9AD8\u8981\u6C42\u7684\u3002"},{value:"D",label:"D.\u613F\u610F\u966A\u4F34\u5B69\u5B50\u4E00\u8D77\u73A9\u7684\uFF0C\u5B69\u5B50\u7684\u670B\u53CB\u4EEC\u6240\u559C\u6B22\u548C\u6B22\u8FCE\u7684\u3002"}]},{title:"30.\u4EE5\u4E0B\u6709\u56DB\u7EC4\u683C\u8A00\uFF0C\u54EA\u7EC4\u91CC\u7B26\u5408\u6211\u611F\u89C9\u7684\u6570\u76EE\u6700\u591A?",options:[{value:"A",label:`A.
\u6700\u6DF1\u523B\u7684\u771F\u7406\u662F\u6700\u7B80\u5355\u548C\u6700\u5E73\u51E1\u7684\u3002
\u8981\u5728\u4EBA\u4E16\u95F4\u53D6\u5F97\u6210\u529F\u5FC5\u987B\u5927\u667A\u82E5\u611A\u3002
\u597D\u813E\u6C14\u662F\u4E00\u4E2A\u4EBA\u5728\u793E\u4EA4\u4E2D\u6240\u80FD\u7A7F\u7740\u7684\u6700\u4F73\u670D\u9970\u3002
\u77E5\u8DB3\u662F\u4EBA\u751F\u5728\u4E16\u6700\u5927\u7684\u5E78\u798F\u3002`},{value:"B",label:`B.
\u8D70\u81EA\u5DF1\u7684\u8DEF\uFF0C\u8BA9\u4EBA\u5BB6\u53BB\u8BF4\u5427\u3002
\u867D\u7136\u4E16\u754C\u5145\u6EE1\u4E86\u82E6\u96BE\uFF0C\u4F46\u662F\u82E6\u96BE\u603B\u662F\u80FD\u6218\u80DC\u7684.
\u6709\u6240\u6210\u5C31\u662F\u4EBA\u751F\u552F\u4E00\u7684\u771F\u6B63\u7684\u4E50\u8DA3.
\u5BF9\u6211\u800C\u8A00\u89E3\u51B3\u4E00\u4E2A\u95EE\u9898\u548C\u4EAB\u53D7\u4E00\u4E2A\u5047\u671F\u4E00\u6837\u597D\u3002`},{value:"C",label:`C.
\u4E00\u4E2A\u4E0D\u6CE8\u610F\u5C0F\u4E8B\u60C5\u7684\u4EBA\uFF0C\u6C38\u8FDC\u4E0D\u4F1A\u6210\u529F\u5927\u4E8B\u4E1A\u3002
\u7406\u6027\u662F\u7075\u9B42\u4E2D\u6700\u9AD8\u8D35\u7684\u56E0\u7D20\u3002
\u5207\u5FCC\u6D6E\u5938\u94FA\u5F20\u3002\u4E0E\u5176\u8BF4\u5F97\u8FC7\u5206\uFF0C\u4E0D\u5982\u8BF4\u5F97\u4E0D\u5168\u3002
\u8C28\u614E\u6BD4\u5927\u80C6\u8981\u6709\u529B\u91CF\u5F97\u591A\u3002`},{value:"D",label:`D.
\u4E0E\u5176\u5728\u6B7B\u7684\u65F6\u5019\u63E1\u7740\u4E00\u5927\u628A\u94B1\uFF0C\u8FD8\u4E0D\u5982\u6D3B\u65F6\u6D3B\u5F97\u4E30\u5BCC\u591A\u5F69\u3002
\u4EFB\u4F55\u65F6\u5019\u90FD\u8981\u6700\u771F\u5B9E\u5730\u5BF9\u5F85\u4F60\u81EA\u5DF1\uFF0C\u8FD9\u6BD4\u4EC0\u4E48\u90FD\u91CD\u8981\u3002
\u4F7F\u751F\u6D3B\u53D8\u6210\u5E7B\u60F3\uFF0C\u518D\u628A\u5E7B\u60F3\u5316\u4E3A\u73B0\u5B9E\u3002
\u5E78\u798F\u4E0D\u5728\u4E8E\u62E5\u6709\u91D1\u94B1\uFF0C\u800C\u5728\u4E8E\u83B7\u5F97\u6210\u5C31\u65F6\u7684\u559C\u60A6\u4EE5\u53CA\u4EA7\u751F\u521B\u9020\u529B\u7684\u6FC0\u60C5\u3002`}]}],R=Vue.defineComponent,_=Vue.createElementVNode,z=Vue.unref,O=Vue.renderList,V=Vue.Fragment,C=Vue.openBlock,y=Vue.createElementBlock,I=Vue.toDisplayString,L=Vue.createTextVNode,D=Vue.resolveComponent,c=Vue.withCtx,M=Vue.createBlock,f=Vue.createVNode,Q=Vue.pushScopeId,U=Vue.popScopeId,q=echarts.init,Y=Vue.nextTick,K=Vue.reactive,P=Vue.ref,F=r=>(Q("data-v-ae59fceb"),r=r(),U(),r),W=F(()=>_("h1",null,"\u8272\u5F69\u6027\u683C\u6D4B\u8BD5",-1)),X=F(()=>_("br",null,null,-1)),G=F(()=>_("hr",null,null,-1)),J=F(()=>_("br",null,null,-1)),Z={style:{"font-weight":"bold"}},ee=R({__name:"HomeView",setup(r){const n=P(),i=P(),t=K({answers:Object.fromEntries(S.map((a,l)=>[l,void 0])),visible:!1});async function e(){var a,l,o,s;try{await((a=n.value)==null?void 0:a.validate())}catch(d){const m=(o=(l=d[0])==null?void 0:l[0])==null?void 0:o.field;m&&((s=n.value)==null||s.scrollToField(m));return}t.visible=!0,Y(B)}function u(a){const l={};return a.forEach(o=>{var s;return(s=l[o])!=null||(l[o]=0),l[o]++}),l}function B(){var A,v,E,b,p,h,N,$;const a=u(Array.from({length:15},(j,g)=>t.answers[g])),l=u(Array.from({length:15},(j,g)=>t.answers[g+15])),o=((A=a.A)!=null?A:0)+((v=l.D)!=null?v:0),s=((E=a.B)!=null?E:0)+((b=l.C)!=null?b:0),d=((p=a.C)!=null?p:0)+((h=l.B)!=null?h:0),m=((N=a.D)!=null?N:0)+(($=l.A)!=null?$:0);q(i.value).setOption({title:{text:"\u57FA\u672C\u56FE\u5F62",left:"center"},tooltip:{trigger:"item"},series:[{name:"\u6027\u683C\u8272\u5F69\u62A5\u544A",type:"pie",radius:"50%",label:{normal:{show:!0,formatter:"{b} {d}%"}},data:[{value:o,name:"\u7EA2\u8272(red)"},{value:s,name:"\u84DD\u8272(blue)"},{value:d,name:"\u9EC4\u8272(yellow)"},{value:m,name:"\u7EFF\u8272(green)"}],emphasis:{itemStyle:{shadowBlur:10,shadowOffsetX:0,shadowColor:"rgba(0, 0, 0, 0.5)"}}}],color:["red","blue","yellow","green"]})}return(a,l)=>{const o=D("el-radio"),s=D("el-radio-group"),d=D("el-form-item"),m=D("el-button"),T=D("el-form"),A=D("el-dialog");return C(),y(V,null,[f(T,{ref_key:"formRef",ref:n,model:t.answers,style:{margin:"0 auto"}},{default:c(()=>[W,X,G,J,(C(!0),y(V,null,O(z(S),({title:v,options:E},b)=>(C(),M(d,{key:v,prop:`${b}`,rules:[{required:!0,message:`\u9898\u76EE ${b+1} \u672A\u586B\u5199`}]},{label:c(()=>[_("div",Z,I(v),1)]),default:c(()=>[f(s,{modelValue:t.answers[b],"onUpdate:modelValue":p=>t.answers[b]=p},{default:c(()=>[(C(!0),y(V,null,O(E,({value:p,label:h})=>(C(),M(o,{key:p,label:p},{default:c(()=>[L(I(h),1)]),_:2},1032,["label"]))),128))]),_:2},1032,["modelValue","onUpdate:modelValue"])]),_:2},1032,["prop","rules"]))),128)),f(d,null,{default:c(()=>[f(m,{type:"primary",onClick:e},{default:c(()=>[L("\u63D0\u4EA4")]),_:1})]),_:1})]),_:1},8,["model"]),f(A,{modelValue:t.visible,"onUpdate:modelValue":l[0]||(l[0]=v=>t.visible=v),title:"\u6027\u683C\u8272\u5F69\u62A5\u544A",width:"80%"},{default:c(()=>[_("div",{class:"chart",ref_key:"chartRef",ref:i},null,512)]),_:1},8,["modelValue"])],64)}}});const le=(r,n)=>{const i=r.__vccOpts||r;for(const[t,e]of n)i[t]=e;return i},ue=le(ee,[["__scopeId","data-v-ae59fceb"]]),te=Vue.defineComponent,ae=Vue.unref,w=Vue.createVNode,k=Vue.resolveComponent,x=Vue.withCtx,oe=Vue.openBlock,ne=Vue.createBlock,re=te({__name:"App",setup(r){return(n,i)=>{const t=k("el-main"),e=k("el-container"),u=k("el-config-provider");return oe(),ne(u,{locale:ae(H)},{default:x(()=>[w(e,null,{default:x(()=>[w(t,null,{default:x(()=>[w(ue)]),_:1})]),_:1})]),_:1},8,["locale"])}}});const se=Vue.createApp;ElementPlus;se(re).use(ElementPlus).mount("#app");