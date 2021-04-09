export const types = {
  NAVBAR_ITEMS_ADD: 'NAVBAR_ITEMS_ADD',
  TESTIMONIALS_ADD: 'TESTIMONIALS_ADD',
  CONFIGURATOR_ADD: 'CONFIGURATOR_ADD',
}

const baseUrl = 'https://raw.githubusercontent.com/Bernabe-Felix/Bellotero/master/'

export const to = {
  navBar: `${baseUrl}app.json`,
  testimonials: `${baseUrl}page1.json`,
  configurator: `${baseUrl}page2.json`,
}
