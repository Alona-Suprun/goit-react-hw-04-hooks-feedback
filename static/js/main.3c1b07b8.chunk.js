(this["webpackJsonpgoit-react-hw-04-hooks-feedback"]=this["webpackJsonpgoit-react-hw-04-hooks-feedback"]||[]).push([[0],[,,function(e,t,c){e.exports={text:"Statistics_text__3Ouul"}},,function(e,t,c){e.exports={optionList:"FeedbackOptions_optionList__2Aydw",item:"FeedbackOptions_item__1uMO8",button:"FeedbackOptions_button__3eXtd"}},,,function(e,t,c){e.exports={title:"Section_title__1arGq"}},,,,,,function(e,t,c){},function(e,t,c){"use strict";c.r(t);var n=c(1),a=c.n(n),s=c(6),i=c.n(s),o=c(3),r=c(7),l=c.n(r),b=c(0),u=function(e){var t=e.title,c=e.children;return Object(b.jsxs)("section",{children:[Object(b.jsx)("h2",{className:l.a.title,children:t}),c]})},d=c(4),j=c.n(d),x=function(e){var t=e.options,c=e.onLeaveFeedback;return Object(b.jsx)("ul",{className:j.a.optionList,children:t.map((function(e){return Object(b.jsx)("li",{className:j.a.item,children:Object(b.jsx)("button",{type:"button",className:j.a.button,onClick:function(){return c(e)},children:e})},e)}))})},O=c(2),h=c.n(O),f=function(e){var t=e.excellent,c=e.good,n=e.neutral,a=e.bad,s=e.total,i=e.positiveFeedbacks;return 0===s?Object(b.jsx)("p",{className:h.a.text,children:"No feedback given"}):Object(b.jsxs)("ul",{children:[Object(b.jsxs)("li",{className:h.a.text,children:["Excellent: ",t]}),Object(b.jsxs)("li",{className:h.a.text,children:["Good: ",c]}),Object(b.jsxs)("li",{className:h.a.text,children:["Neutral: ",n]}),Object(b.jsxs)("li",{className:h.a.text,children:["Bad: ",a]}),Object(b.jsxs)("li",{className:h.a.text,children:["Total: ",s]}),Object(b.jsxs)("li",{className:h.a.text,children:["Positive feedback: ",i,"%"]})]})},k=function(){var e=Object(n.useState)(0),t=Object(o.a)(e,2),c=t[0],a=t[1],s=Object(n.useState)(0),i=Object(o.a)(s,2),r=i[0],l=i[1],d=Object(n.useState)(0),j=Object(o.a)(d,2),O=j[0],h=j[1],k=Object(n.useState)(0),p=Object(o.a)(k,2),m=p[0],_=p[1],v=function(){return c+r+O+m};return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("h1",{children:"Feedback widget"}),Object(b.jsx)(u,{title:"Please leave your feedback",children:Object(b.jsx)(x,{options:["excellent","good","neutral","bad"],onLeaveFeedback:function(e){switch(e){case"excellent":a((function(e){return e+1}));break;case"good":l((function(e){return e+1}));break;case"neutral":h((function(e){return e+1}));break;case"bad":_((function(e){return e+1}));break;default:return}}})}),Object(b.jsx)(u,{title:"Statistics",children:Object(b.jsx)(f,{excellent:c,good:r,neutral:O,bad:m,total:v(),positiveFeedbacks:function(){var e=v();return e?Math.round((c+r)/e*100):0}()})})]})};c(13);i.a.render(Object(b.jsx)(a.a.StrictMode,{children:Object(b.jsx)(k,{})}),document.getElementById("root"))}],[[14,1,2]]]);
//# sourceMappingURL=main.3c1b07b8.chunk.js.map