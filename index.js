function newImage(url, left, bottom) {
  let pic = document.createElement("img");
  pic.src = url;
  pic.style.position = "fixed";
  pic.style.left = left + "px";
  pic.style.bottom = bottom + "px";
  document.body.append(pic);
  return pic;
}

function newItem(url, left, bottom) {
  let pic = newImage(url, left, bottom);

  pic.addEventListener("dblclick", function () {
    pic.remove();
  });
}

// invoking newImage/newItem functions
newImage("assets/green-character.gif", 100, 100);
newImage("assets/pine-tree.png", 450, 200);
newImage("assets/tree.png", 200, 300);
newImage("assets/pillar.png", 350, 100);
newImage("assets/crate.png", 150, 200);
newImage("assets/well.png", 500, 425);

newItem("assets/sword.png", 500, 405);
newItem("assets/sheild.png", 165, 185);
newItem("assets/staff.png", 600, 100);

// background
function bgImages(url, width, height) {
  let bg = document.createElement("div");
  bg.style.backgroundImage = `url(${url})`;
  bg.style.width = width + "%";
  bg.style.height = height + "rem";
  document.body.style.margin = "0";
  document.body.appendChild(bg);
  return bg;
}
// invoking bgImages function
bgImages("assets/sky.png", 100, 30);
bgImages("assets/grass.png", 100, 62.8);
