const componentGenerator = (name) => {
  return (
    `import React from 'react'

class ${name} extends React.PureComponent {
  render() {
    return (
      <div>Hello this is ${name}</div>
    );
  }
}

export default ${name};`
  );
};

module.exports = componentGenerator;