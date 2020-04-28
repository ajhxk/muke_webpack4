import avatar from './avatar.jpg';
import style from './index.less';
import createAvatar from './createAvatar'

console.log('style:  ', JSON.stringify(style))
createAvatar();

var img = new Image();
img.src = avatar;
img.classList.add(style.avatar);

var root = document.getElementById('root');
root.append(img);
