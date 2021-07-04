export function getCookie (key) {
  if (document.cookie) {
    let arr = document.cookie.split(';');
    console.log(arr,'8877')
    for (let i = 0; i < arr.length; i++) {
      let item = arr[i].split('=');
      if(item[0].trim() == key.trim()) return item[1]
    }
    return ''
  }
}

export function setCookie (key,value,day) {
  if (typeof day === 'number') {
    let d = new Date();
    d.setDate(d.getDate() + day);
    document.cookie = `${key}=${value};expires=${d};path=/`;
  } else {
    document.cookie = `${key}=${value};path=/`
  }
}