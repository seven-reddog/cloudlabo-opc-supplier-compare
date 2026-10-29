/* 供应商采购报价对比器: deterministic business rules. MIT License. */
(function(){
'use strict';
const H=typeof module==='object'&&module.exports?require('./common.js'):globalThis.OPC;
const {clone,esc,num,money,lines,choices,required,tableRows,metric,note,safeName,csv,parseCSV,day,today,unique,replaceTokens,documentHTML,crc32,zipBytes}=H;
const process=function process(d){
 const q=num(d.quantity,'采购量',1);if(!Number.isInteger(q))throw Error('采购量需为整数');const rows=tableRows(d).map(r=>{const moq=num(r.moq,'起订量',1),price=num(r.price),shipping=num(r.shipping),actual=Math.max(q,moq);return [r.supplier,price,moq,actual,money(actual*price+shipping),money(price+shipping/actual),num(r.days),r.payment,moq>q?'需多采购 '+(moq-q)+' 件':'满足计划数量'];});rows.sort((a,b)=>Number(a[4])-Number(b[4]));
 return {metrics:[metric('计划采购',q),metric('供应商数量',rows.length),metric('最低整单支出',rows[0][4])],columns:['供应商','单价','起订量','实际采购量','总支出','每件成本','交期天数','付款条件','提示'],rows,notes:['按满足起订量后的整单支出排序，未替代质量、交期及付款风险判断。']};
};
const api={process};
if(typeof module==='object'&&module.exports)module.exports=api;else globalThis.Core=api;
})();
