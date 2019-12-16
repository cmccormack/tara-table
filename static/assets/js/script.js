/* global data */
const root = document.getElementById('root')

// Initialize Materialize-CSS Tabs
M.Tabs.init(document.querySelector('.tabs'))

const { ranks } = data.meta

// Sort columns by colIndex
const sortedColumns = data.values.sort((a, b) => a.colIndex - b.colIndex)

// Apply custom filter against columns during render
const columnFormat = (propName, value) => {
  switch (propName) {
    case "Significant":
      value = value.replace(/true/gi, '<span class="green-check">✔</span>');
      value = value.replace(/false/gi, '<span class="red-x">✘</span>');
  }
  return value
}

const buildTree = (node) => {

  const isLeaf = node.children.length === 0
  const body = isLeaf
    ? ''
    : `
      <div class="collapsible-body">
        ${node.children.map(buildTree).join('\n')}
      </div>
    `

  return `
    <ul class="node ${isLeaf ? '' : 'collapsible'} active">
      <li class="${isLeaf ? 'leaf' : 'node'}">
        <div class="row collapsible-header ${ranks[node.values.Level].color} ">
          ${
    isLeaf
      ? '<i class="material-icons arrow-wrapper"></i>'
      : '<i class="material-icons arrow-wrapper arrow">keyboard_arrow_right</i>'
    }
          ${data.values.map(value => `<div class="col s${value.colWidth}">${columnFormat(value.propName, node.values[value.propName])}</div>`).join('\n')}
        </div >
        ${body}
      </li >
    </ul >
  `

}

const header = `
  <div id = "data-header" class="row grey lighten-3 black-text">
    ${data.values.map(value => `<div class="col s${value.colWidth}">${value.header}</div>`).join('\n')}
  </div >
  `

root.innerHTML = header + data.children.map(buildTree).join('\n')

const toggleExpand = (e, instances, state) => {
  switch (state) {
    case "open":
      instances.forEach(elem => elem.open(0))
      break;
    case "close":
      instances.forEach(elem => elem.close(0))
      break;
  }
}

document.addEventListener('DOMContentLoaded', function () {
  const expandButton = document.getElementsByClassName('expand')[0]
  const collapseButton = document.getElementsByClassName('collapse')[0]

  const collapsibles = document.querySelectorAll('.collapsible');
  const collapseOptions = {
    accordion: false,
    onOpenStart: li => li.querySelector('.arrow').textContent = "keyboard_arrow_down",
    onCloseStart: li => li.querySelector('.arrow').textContent = "keyboard_arrow_right",
  }
  const collapsible_instances = M.Collapsible.init(collapsibles, collapseOptions);

  expandButton.addEventListener('click', (e) => toggleExpand(e, collapsible_instances, 'open'))
  collapseButton.addEventListener('click', (e) => toggleExpand(e, collapsible_instances, 'close'))
});

