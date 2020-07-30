(this.webpackJsonpgradecalc=this.webpackJsonpgradecalc||[]).push([[0],{170:function(e,t,a){e.exports=a(297)},175:function(e,t,a){},297:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),o=a(40),r=a.n(o),c=(a(175),a(159)),s=a(30),l=a(31),u=a(18),h=a(33),m=a(32),d=a(307),p=a(308),b=a(310),v=a(311),g=a(312),S=a(298),j=a(306),C=a(55),E=a(42),f=function(e){Object(h.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).positiveClick=n.positiveClick.bind(Object(u.a)(n)),n.negativeClick=n.negativeClick.bind(Object(u.a)(n)),n}return Object(l.a)(a,[{key:"positiveClick",value:function(e){this.props.onToggle(!0)}},{key:"negativeClick",value:function(e){this.props.onToggle(!1)}},{key:"render",value:function(){return this.props.isPositive?i.a.createElement(S.a.Group,{fluid:!0},i.a.createElement(S.a,{onClick:this.positiveClick,color:"green",icon:!0},i.a.createElement(E.a,{name:"plus"})),i.a.createElement(S.a,{onClick:this.negativeClick,icon:!0},i.a.createElement(E.a,{name:"minus"}))):i.a.createElement(S.a.Group,{fluid:!0},i.a.createElement(S.a,{onClick:this.positiveClick,icon:!0},i.a.createElement(E.a,{name:"plus"})),i.a.createElement(S.a,{onClick:this.negativeClick,color:"red",icon:!0},i.a.createElement(E.a,{name:"minus"})))}}]),a}(i.a.Component);function k(e){return isNaN(e)?0:e}var O=function(e){Object(h.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).state={isPositive:!0,score:0},n.onToggle=n.onToggle.bind(Object(u.a)(n)),n.onScoreChange=n.onScoreChange.bind(Object(u.a)(n)),n.onRatioChange=n.onRatioChange.bind(Object(u.a)(n)),n}return Object(l.a)(a,[{key:"calcScore",value:function(){var e=k(this.state.score),t=k(this.props.ratio),a=k(this.props.maxScore);return t*(this.state.isPositive?e:a-e)/this.props.maxScore}},{key:"onToggle",value:function(e){this.setState({isPositive:e})}},{key:"onScoreChange",value:function(e){this.setState({score:parseFloat(e.target.value)})}},{key:"onRatioChange",value:function(e){this.props.onRatioChange(parseFloat(e.target.value))}},{key:"componentDidUpdate",value:function(e,t){isNaN(this.props.ratio)||isNaN(this.state.score)||this.props.ratio===e.ratio&&this.state.isPositive===t.isPositive&&this.state.score===t.score||this.props.updateScore(this.calcScore())}},{key:"render",value:function(){return i.a.createElement(p.a,null,i.a.createElement(p.a.Group,{widths:"equal"},i.a.createElement(p.a.Field,null,i.a.createElement("label",null,this.props.name),i.a.createElement(f,{isPositive:this.state.isPositive,onToggle:this.onToggle})),i.a.createElement(p.a.Input,{label:"\uc810\uc218",value:this.state.score,type:"number",onChange:this.onScoreChange}),i.a.createElement(p.a.Field,null,i.a.createElement("label",null,"\ubc18\uc601 \ube44\uc728"),i.a.createElement(j.a,{labelPosition:"right",value:this.props.ratio,type:"number",onChange:this.onRatioChange},i.a.createElement("input",null),i.a.createElement(C.a,null,"%")))))}}]),a}(i.a.Component),y=function(e){Object(h.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).updatePerScore=n.updatePerScore.bind(Object(u.a)(n)),n.onPerRatioChange=n.onPerRatioChange.bind(Object(u.a)(n)),n.updateMidScore=n.updateMidScore.bind(Object(u.a)(n)),n.onMidRatioChange=n.onMidRatioChange.bind(Object(u.a)(n)),n.state={perMaxScore:100,perRatio:100,perScore:0,midMaxScore:100,midRatio:0,midScore:0},n}return Object(l.a)(a,[{key:"updatePerScore",value:function(e){this.setState({perScore:e})}},{key:"onPerRatioChange",value:function(e){this.setState({perRatio:e,perMaxScore:e,midRatio:(100-e)/2})}},{key:"updateMidScore",value:function(e){this.setState({midScore:e})}},{key:"onMidRatioChange",value:function(e){this.setState({midRatio:e})}},{key:"render",value:function(){var e=this,t=this.state.perScore+this.state.midScore,a=100-this.state.perRatio-this.state.midRatio,n=[90,85,80,75,70].map((function(e){return(e-t)/a*100})).map((function(t){if(t<0&&(t=0),t>100)return[!0,!1,!1,"INF"];var a=100*e.state.midScore<t*e.state.midRatio;return[!1,a,!a,t.toFixed(1)]})).map((function(e,t){return i.a.createElement(b.a.Cell,{key:t,negative:e[0],warning:e[1],positive:e[2]},e[3])}));return i.a.createElement("div",{className:"subject"},i.a.createElement(v.a,{as:"h5",attached:"top"},this.props.name),i.a.createElement(g.a,{attached:!0},i.a.createElement(O,{name:"\uc218\ud589\ud3c9\uac00",onRatioChange:this.onPerRatioChange,updateScore:this.updatePerScore,maxScore:this.state.perMaxScore,ratio:this.state.perRatio}),i.a.createElement(O,{name:"\uc911\uac04\uace0\uc0ac",onRatioChange:this.onMidRatioChange,updateScore:this.updateMidScore,maxScore:this.state.midMaxScore,ratio:this.state.midRatio}),i.a.createElement(b.a,{celled:!0,unstackable:!0},i.a.createElement(b.a.Header,null,i.a.createElement(b.a.Row,null,i.a.createElement(b.a.HeaderCell,null,"A+"),i.a.createElement(b.a.HeaderCell,null,"A0"),i.a.createElement(b.a.HeaderCell,null,"A-"),i.a.createElement(b.a.HeaderCell,null,"B+"),i.a.createElement(b.a.HeaderCell,null,"B0"))),i.a.createElement(b.a.Body,null,i.a.createElement(b.a.Row,null,n)))),i.a.createElement(S.a,{attached:"bottom",content:"\uacfc\ubaa9 \uc0ad\uc81c",onClick:this.props.onDelete}))}}]),a}(i.a.Component),R=function(e){Object(h.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).state={subjectList:[],subjectName:""},n.addSubject=n.addSubject.bind(Object(u.a)(n)),n.removeSubject=n.removeSubject.bind(Object(u.a)(n)),n.updateSubjectName=n.updateSubjectName.bind(Object(u.a)(n)),n}return Object(l.a)(a,[{key:"addSubject",value:function(e){var t=this;e.preventDefault();var a=Date.now(),n=[i.a.createElement(y,{key:a,id:a,name:this.state.subjectName,onDelete:function(){return t.removeSubject(a)}})].concat(Object(c.a)(this.state.subjectList));this.setState({subjectList:n,subjectName:""})}},{key:"removeSubject",value:function(e){this.setState({subjectList:this.state.subjectList.filter((function(t){return t.props.id!==e}))})}},{key:"updateSubjectName",value:function(e){this.setState({subjectName:e.target.value})}},{key:"render",value:function(){return i.a.createElement(d.a,null,i.a.createElement(p.a,{style:{marginTop:"2.5em"}},i.a.createElement(p.a.Group,{unstackable:!0,widths:2},i.a.createElement(p.a.Input,{fluid:!0,placeholder:"\uacfc\ubaa9\uba85",value:this.state.subjectName,onChange:this.updateSubjectName,width:12}),i.a.createElement(p.a.Button,{fluid:!0,primary:!0,content:"\ucd94\uac00",onClick:this.addSubject,width:4}))),this.state.subjectList)}}]),a}(i.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(296);r.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(R,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[170,1,2]]]);
//# sourceMappingURL=main.434a80a7.chunk.js.map