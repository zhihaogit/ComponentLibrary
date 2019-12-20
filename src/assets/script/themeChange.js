// 动态修改 element-ui主题色
const { version } = require('element-ui/package.json');

const ORIGINAL_THEME = '#409EFF';
let chalk = '';

function updateStyle(style, oldCluster, newCluster) {
  let newStyle = style;
  oldCluster.forEach((color, index) => {
    newStyle = newStyle.replace(new RegExp(color, 'ig'), newCluster[index]);
  });
  return newStyle;
}

function getCSSString(url) {
  return new Promise((resolve) => {
    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = () => {
      if (xhr.readyState === 4 && xhr.status === 200) {
        chalk = xhr.responseText.replace(/@font-face{[^}]+}/, '');
        resolve();
      }
    };
    xhr.open('GET', url);
    xhr.send();
  });
}

function getThemeCluster(theme) {
  const tintColor = (color, tint) => {
    let red = parseInt(color.slice(0, 2), 16);
    let green = parseInt(color.slice(2, 4), 16);
    let blue = parseInt(color.slice(4, 6), 16);

    if (tint === 0) {
      return [red, green, blue].join(',');
    }
    red += Math.round(tint * (255 - red));
    green += Math.round(tint * (255 - green));
    blue += Math.round(tint * (255 - blue));

    red = red.toString(16);
    green = green.toString(16);
    blue = blue.toString(16);

    return `#${red}${green}${blue}`;
  };

  const shadeColor = (color, shade) => {
    let red = parseInt(color.slice(0, 2), 16);
    let green = parseInt(color.slice(2, 4), 16);
    let blue = parseInt(color.slice(4, 6), 16);

    red = Math.round((1 - shade) * red);
    green = Math.round((1 - shade) * green);
    blue = Math.round((1 - shade) * blue);

    red = red.toString(16);
    green = green.toString(16);
    blue = blue.toString(16);

    return `#${red}${green}${blue}`;
  };

  const clusters = [theme];
  for (let i = 0; i <= 9; i += 1) {
    clusters.push(tintColor(theme, Number((i / 10).toFixed(2))));
  }

  clusters.push(shadeColor(theme, 0.1));
  return clusters;
}

const changeFunc = async (thememColor) => {
  if (typeof thememColor !== 'string') return;
  const oldColor = chalk
    ? thememColor
    : ORIGINAL_THEME;
  const thememCluster = getThemeCluster(thememColor.replace('#', ''));
  const originCluster = getThemeCluster(oldColor.replace('#', ''));

  function getHandler(id) {
    return () => {
      const originClusterInside = getThemeCluster(ORIGINAL_THEME.replace('#', ''));
      const newStyle = updateStyle(chalk, originClusterInside, thememCluster);

      let styleElement = document.getElementById(id);
      if (!styleElement) {
        styleElement = document.createElement('style');
        styleElement.setAttribute('id', id);
        document.head.appendChild(styleElement);
      }
      styleElement.innerText = newStyle;
    };
  }

  if (!chalk) {
    const url = `https://unpkg.com/element-ui@${version}/lib/theme-chalk/index.css`;
    await getCSSString(url);
  }

  const chalkHandler = getHandler('chalk-style');
  chalkHandler();

  const styles = [].slice.call(document.querySelectorAll('style'))
    .filter((s) => {
      const text = s.innerText;
      return new RegExp(oldColor, 'i').test(text) && !/Chalk Variables/.test(text);
    });

  styles.forEach((s) => {
    const sCopy = s;
    if (typeof sCopy.innerText !== 'string') return;
    sCopy.innerText = this.updateStyle(sCopy.innerText, originCluster, thememCluster);
  });
};

export default changeFunc;

