var imagesArray = ["1","2","3","4","5"]; //you can set the array integer values dynamically
var tempImagesArray = imagesArray.slice(0);

getRandomImage = function(tempImagesArray,size){ //call getRandomImage if no size is needed and remove the size input value
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

displayImage = function (){ //modify sizes or add new ones if you need to use this in several different locations
  var size = '220x220';
  getRandomImage(tempImagesArray,size);
	return(src);
}

displayImageWide = function (){
    var size = '300x140';
    getRandomImage(tempImagesArray,size);
	return(src);
}
