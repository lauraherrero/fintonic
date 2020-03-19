(this.webpackJsonpfintonic=this.webpackJsonpfintonic||[]).push([[0],{13:function(e,a,t){},14:function(e,a,t){"use strict";t.r(a);var l=t(0),n=t.n(l),r=t(2),s=t.n(r),c=t(3),m=t(4),i=t(6),u=t(5),o=t(7),N=(t(13),function(){return n.a.createElement("div",{className:"header__container"},n.a.createElement("button",{className:"btn"},n.a.createElement("i",{className:"fas fa-bars"})," BROWSE"),n.a.createElement("button",{className:"btn"},n.a.createElement("i",{className:"fas fa-plus-square"})," ADD NEW QUESTIONS"),n.a.createElement("button",{className:"btn"},n.a.createElement("i",{className:"fas fa-cogs"})," API"),n.a.createElement("button",{className:"btn"},n.a.createElement("i",{className:"fas fa-comments"})," DISCUSS"),n.a.createElement("button",{className:"btn"},n.a.createElement("i",{className:"fas fa-sign-out-alt"})," LOGIN"))}),p=function(){return n.a.createElement("div",null,n.a.createElement("h2",{className:"main__title"},"Browse Questions"))},f=function(e){return n.a.createElement("div",{className:"listText"},n.a.createElement("p",{className:"listText__item"},e.questionCategory),n.a.createElement("p",{className:"listText__item"},e.questionType),n.a.createElement("p",{className:"listText__item"},e.questionDifficulty),n.a.createElement("p",{className:"listText__item"},e.questionStatement))},E=[{idNumber:9493},{idNumber:9014},{idNumber:9011},{idNumber:5649},{idNumber:5648},{idNumber:5645},{idNumber:5643},{idNumber:5643},{idNumber:5643},{idNumber:5643}],d=[{autorName:"Karen"},{autorName:"Noctithra"},{autorName:"Coldflame"},{autorName:"Avalica"},{autorName:"Codex"},{autorName:"Avalica"},{autorName:"Avalica"},{autorName:"Avalica"},{autorName:"Avalica"},{autorName:"Avalica"}],_=function(e){return n.a.createElement("div",{className:"list"},n.a.createElement("div",{className:"list__wrapper"},n.a.createElement("h3",{className:"list__wrapper--title"},"ID ",n.a.createElement("i",{class:"fas fa-sort"})," "),n.a.createElement("h3",{className:"list__wrapper--title"},"Category"),n.a.createElement("h3",{className:"list__wrapper--title"},"Type"),n.a.createElement("h3",{className:"list__wrapper--title"},"Difficulty"),n.a.createElement("h3",{className:"list__wrapper--title"},"Question/Statement"),n.a.createElement("h3",{className:"list__wrapper--title"},"Created By")),n.a.createElement("div",{className:"listcontainer"},n.a.createElement("ul",{className:"listcontainer__id"},E.map((function(e,a){return n.a.createElement("li",{className:"listcontainer__id--item",key:a},e.idNumber)}))),n.a.createElement("ul",{className:"listcontainer__text"},e.questionList.map((function(e,a){return n.a.createElement("li",{className:"listcontainer__text--item",key:a},n.a.createElement(f,{questionCategory:e.category,questionType:e.type,questionDifficulty:e.difficulty,questionStatement:e.question}))}))),n.a.createElement("ul",{className:"listcontainer__autor"},d.map((function(e,a){return n.a.createElement("li",{className:"listcontainer__autor--item",key:a},e.autorName)})))))},b=[{name:1},{name:2},{name:3},{name:4},{name:">"}],y=function(){return n.a.createElement("div",{className:"pages"},n.a.createElement("ul",{className:"pages__list"},b.map((function(e,a){return n.a.createElement("li",{className:"pages__list--number",key:a},n.a.createElement("span",null,e.name))}))))},v=function(){return n.a.createElement("div",{className:"formWrapper"},n.a.createElement("h2",{className:"formWrapper__title"},"Add new question"),n.a.createElement("form",{className:"form",action:"*",method:"POST"},n.a.createElement("div",{className:"form__first"},n.a.createElement("div",{className:"form__first--label"},n.a.createElement("label",{className:"label",for:"category"},"Category"),n.a.createElement("input",{className:"input",id:"category",placeholder:"General Knowledge",type:"text",name:"category",required:!0})),n.a.createElement("div",{className:"form__first--label"},n.a.createElement("label",{className:"label",for:"type"},"Type"),n.a.createElement("input",{className:"input",id:"type",placeholder:"Multiple choice",type:"text",name:"type",required:!0})),n.a.createElement("div",{className:"form__first--label"},n.a.createElement("label",{className:"label",for:"difficulty"},"Difficulty"),n.a.createElement("input",{className:"input",id:"difficulty",placeholder:"Easy",type:"text",name:"difficulty",required:!0}))),n.a.createElement("div",{className:"form__second"},n.a.createElement("label",{className:"label",for:"question"},"Question"),n.a.createElement("input",{className:"input big",id:"question",type:"text",name:"question",required:!0})),n.a.createElement("div",{className:"form__third"},n.a.createElement("div",{className:"form__label"},n.a.createElement("label",{className:"thirdLabel",for:"answer"},"Correct Answer"),n.a.createElement("input",{className:"input",id:"answer",type:"text",name:"answer",required:!0})),n.a.createElement("div",{className:"form__label"},n.a.createElement("label",{className:"answerLabel",for:"answer1"},"Incorrect Answer #1"),n.a.createElement("input",{className:"input",id:"answer1",type:"text",name:"answer1",required:!0})),n.a.createElement("div",{className:"form__label"},n.a.createElement("label",{className:"answerLabel",for:"answer2"},"Incorrect Answer #2"),n.a.createElement("input",{className:"input",id:"answer2",type:"text",name:"answer2",required:!0})),n.a.createElement("div",{className:"form__label"},n.a.createElement("label",{className:"answerLabel",for:"answer3"},"Incorrect Answer #3"),n.a.createElement("input",{className:"input",id:"answer3",type:"text",name:"answer3",required:!0}))),n.a.createElement("div",{className:"form__fourth"},n.a.createElement("label",{className:"label",for:"references"},"References [Provide links to Respected Sources][Videos must have Timestamps]"),n.a.createElement("input",{className:"input big",id:"references",type:"text",name:"references",required:!0})),n.a.createElement("div",{class:"form__submit"},n.a.createElement("input",{class:"form__submit--button",type:"submit",value:"SUBMIT"}))))},h=function(e){function a(e){var t;return Object(c.a)(this,a),(t=Object(i.a)(this,Object(u.a)(a).call(this,e))).state={questions:[]},t}return Object(o.a)(a,e),Object(m.a)(a,[{key:"componentDidMount",value:function(){var e=this;fetch("https://opentdb.com/api.php?amount=10").then((function(e){return e.json()})).then((function(a){e.setState({questions:a.results})}))}},{key:"render",value:function(){return console.log(this.state),n.a.createElement("div",{className:"App"},n.a.createElement(N,null),n.a.createElement("div",{className:"body"},n.a.createElement(p,null),n.a.createElement(_,{questionList:this.state.questions}),n.a.createElement(y,null),n.a.createElement(v,null)))}}]),a}(n.a.Component);s.a.render(n.a.createElement(h,null),document.getElementById("root"))},8:function(e,a,t){e.exports=t(14)}},[[8,1,2]]]);
//# sourceMappingURL=main.4f6c7a74.chunk.js.map