/**
 * 设置多种背景颜色
 */
function ChangeBgColor() {

	var bg = document.body.style.background;
	switch (bg) {
	case "red":
		document.body.style.background="yellow";
		break;
	case "yellow":
		document.body.style.background="blue";
		break;
	case "blue":
		document.body.style.background="green";
		break;
	case "green":
		document.body.style.background="white";
		break;
		
	default:document.body.style.background="red";
	break;
	}
}
