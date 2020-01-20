/*
EDIT_PROPERTIES: HelperJavaScript.js
@Since DEC-13-2019
@Author: Ioannis K. Moutsatsos
*/

/* 
assembles a json string of other parameters
and from it sets the value of the transfer parameter
*/
function setJsonActionParam(transferParamId, actionId){
 	mp=jQuery( "[type=checkbox]:checked" ).map(function(){ console.log(jQuery(this).prop("name"));var p={};p[jQuery(this).prop("name")]=document.getElementById(jQuery(this).prop("name")).value; console.log(p); return p})
	jsonParams={}
	jsonParams['action']=actionId
	jsonParams['params']=Object.values(mp).slice(0,mp.length)
	
	document.getElementById(transferParamId).value = JSON.stringify(jsonParams)
	transferParentId = document.getElementById(transferParamId).parentNode.id
	jQuery('#' + transferParentId).trigger('change')
}

function setJsonCreateActionParam(transferParamId, actionId){
 	jsonParams={}
	jsonParams['action']=actionId
	newParam={}
	newParam[jQuery('#newParam').val()]=jQuery('#newVal').val()
	console.log(newParam)
	jsonParams['params']=[newParam]
	
	document.getElementById(transferParamId).value = JSON.stringify(jsonParams)
	transferParentId = document.getElementById(transferParamId).parentNode.id
	jQuery('#' + transferParentId).trigger('change')
}

function setJsonRenameActionParam(transferParamId, actionId){
 	jsonParams={}
	jsonParams['action']=actionId
	newParam={}
	newParam[jQuery('#newParam').val()]=jQuery('#newVal').val()
	console.log(newParam)
	jsonParams['params']=[newParam]
	
	document.getElementById(transferParamId).value = JSON.stringify(jsonParams)
	transferParentId = document.getElementById(transferParamId).parentNode.id
	jQuery('#' + transferParentId).trigger('change')
}

function refreshProperties(){
	lastPropertiesFilter=jQuery('#' + jQuery('input[value=PROPERTIES]')[0].nextSibling.id).siblings("input.uno_choice_filter").val()
 	//jQuery('#' + jQuery('input[value=PROPERTIES_SESSIONPATH]')[0].nextSibling.id).trigger('change')
 	cascadeParameter.update()
 	//reset the filter last value
 	resetFilter(lastPropertiesFilter)
}

function resetFilter(lastPropertiesFilter){
jQuery('#' + jQuery('input[value=PROPERTIES]')[0].nextSibling.id).siblings("input.uno_choice_filter")[0].value=lastPropertiesFilter
jQuery('#' + jQuery('input[value=PROPERTIES]')[0].nextSibling.id).siblings("input.uno_choice_filter").keyup()
}
