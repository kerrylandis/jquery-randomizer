var imagesArray = ["2","3","4","5","6","7","8","9","10","11","12","13","14","15","16","17","18","19","20","21","22","23","24","25","26","27","28","29","30","31","32","33","34","35","36","37","38","39"];
var tempImagesArray = imagesArray.slice(0);

getRandomImage = function(tempImagesArray,size){
  if (tempImagesArray.length > 0){
    num = Math.floor(Math.random() * tempImagesArray.length);
    src = 'path/imagename'+ tempImagesArray[num] + '-' + size + '.jpg';
    tempImagesArray.splice(num, 1);
  } else {
    tempImagesArray = imagesArray.slice(0);
    num = Math.floor(Math.random() * tempImagesArray.length);
    src = 'path/imagename'+ tempImagesArray[num] + '-' + size + '.jpg';
    tempImagesArray.splice(num, 1);
  }
  return(src);
}

displayImage = function (){
  var size = '220x220';
  getRandomImage(tempImagesArray,size);
	return(src);
}

displayImageWide = function (){
    var size = '300x140';
    getRandomImage(tempImagesArray,size);
	return(src);
}
