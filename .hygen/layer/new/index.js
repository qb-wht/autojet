module.exports = {
  prompt: ({ inquirer }) => {
    const questions = [
      {
        type: 'select',
        name: 'layerType',
        message: 'FSD layer:',
        choices: ['3_shared', '2_entities', '1_features', '0_widgets'],
      },
      {
        type: 'input',
        name: 'layerName',
        message: 'FSD layer name:',
      },
      {
        type: 'input',
        name: 'optionals',
        message: `
NN
-c, --component : Генерировать component файл?
-p, --props : Генерировать props для компонента?
-s, --styles : Генерировать styles для компонента?
NN
        `
          .trim()
          .replaceAll('NN', '\n'),
        default: '-cps',
      },
    ];

    return inquirer.prompt(questions).then((answers) => {
      const { layerType, layerName, optionals } = answers;

      const projectPath = 'src/';

      const absPath = `${projectPath}/${layerType}`;

      optionalsData = attrParser(optionals);

      return {
        ...answers,
        absPath,
        layerName,
        projectPath,
        layerType,
        ...optionalsData,
      };
    });
  },
};

function attrParser(str) {
  try {
    const lettersToAttrs = {
      c: 'component',
      p: 'props',
      s: 'styles',
    };

    const attrs = {
      component: false,
      props: false,
      styles: false,
    };

    if (/^-{1,2}all$/.test(str)) {
      for (const key of Object.keys(attrs)) {
        attrs[key] = true;
      }

      return attrs;
    }

    let isDetailed = false;

    if (/^(-c|--component)$/.test(str)) {
      isDetailed = true;
      attrs.component = true;
    }

    if (/^(-p|--props)$/.test(str)) {
      isDetailed = true;
      attrs.props = true;
    }

    if (/^(-s|--styles)$/.test(str)) {
      isDetailed = true;
      attrs.styles = true;
    }

    if (isDetailed) return attrs;

    if (/-[cps][a-z]+/.test(str)) {
      newStr = str.substr(1);
      newStr.split('').forEach((letter) => {
        attrs[lettersToAttrs[letter]] = true;
      });

      return attrs;
    }

    return attrs;
  } catch {
    throw "pi-cli: Не корректный синтаксис для параметра 'optionals'";
  }
}
