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


function setJsonGalleryParam(transferParamId, images2View) {
  //vOutputFolder,vIMAGELIST_URL,vIMAGE_OBJECTS,vIMAGE_GALLERY,vPRIMARY_IMAGE_LIST,vJOB_PATH,vIMAGE_ADJUSTMENTS,vTEST_IMAGES,vBUILD_LABEL
  console.log('setting_json_parameters')
  gallerySource=images2View
  galleryPath=(gallerySource=='i2conv')?jQuery('#galleryPath').val():'imageList'
  galleryImages=(gallerySource=='i2conv')?document.getElementById('i2convArchive').value:document.getElementById(images2View).value
  gallerySuffix=(gallerySource=='i2conv')?'_LevelIntensities':''
  objNames = jQuery('#' + jQuery('input[value=IMAGE_OBJECTS]')[0].nextSibling.id).find('input:checked').map(function() {
    return Q(this).val()
  })
  objOpacity = jQuery('#' + jQuery('input[value=IMAGE_OBJECTS]')[0].nextSibling.id).find('input:checked').map(function() {
    return 'opacity_' + Q(this).val()
  }).map(function() {
    return Q('#' + this).val()
  })
  objColor = jQuery('#' + jQuery('input[value=IMAGE_OBJECTS]')[0].nextSibling.id).find('input:checked').map(function() {
    return 'colpick_' + Q(this).val()
  }).map(function() {
    return Q('#' + this).val()
  })
  
  var d = new Date();
  var timestamp=d.getFullYear()+("0"+(d.getMonth()+1)).slice(-2)+("0"+d.getDate()).slice(-2)+ ("0" + d.getHours()).slice(-2)+ ("0" + d.getMinutes()).slice(-2)+("0" + d.getSeconds()).slice(-2);
  
  jsonParams = {
    vOutputFolder: document.getElementById('jobSessionPath').value,
    vIMAGELIST_URL: jQuery('#' + jQuery('input[value=IMAGELIST_URL]')[0].nextSibling.id).find('input')[0].value,
    vTEST_IMAGES: galleryImages,
    vIMAGE_LABELS: document.getElementById('i2vlabels').value,
    vPRIMARY_IMAGE_LIST: jQuery(jQuery('input[value=PRIMARY_IMAGE_LIST]')[0].nextSibling).find('option:selected').val(),
    vLAYOUT: document.getElementById('gridRows').value.concat(',', jQuery('input[name=fillBy]').filter(':checked').val()),
    vIMAGE_OBJECTS: {
      NAMES: Object.values(objNames).slice(0, objNames.length).join(','),
      COLOR: Object.values(objColor).slice(0, objColor.length).join(','),
      OPACITY: Object.values(objOpacity).slice(0, objOpacity.length).join(','),
    },   
    vBRIGHTNESS: jQuery('#set_brightness').val(),
    vCONTRAST: jQuery('#set_contrast').val(),
    LAYOUT: {
      vFILLSIZE: jQuery('#gridRows').val(),
      vFILLBY: jQuery('[name^=fillBy]:checked').val()
    },
    OVERLAY: {
      OVERLAYFLAG: jQuery('#getOverlay').val(),
      OVERLAYSIZE: jQuery('#imgPerComposite').val()
    },
    vNOTES: jQuery('input[value=GALLERY_NOTES]')[0].nextSibling.value,
    TSTAMP: timestamp,
    GALLERY_SOURCE: gallerySource,
    GALLERY_PATH: galleryPath,
    vBUILD_LABEL: jQuery('#' + jQuery('input[value=GALLERY_LABEL]')[0].nextSibling.id).find('input')[0].value+gallerySuffix
  }
  document.getElementById(transferParamId).value = JSON.stringify(jsonParams)
  transferParentId = document.getElementById(transferParamId).parentNode.id
  jQuery('#' + transferParentId).trigger('change')
}
