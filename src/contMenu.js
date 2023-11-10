export const menuItems = [
  {
    title: 'Home',
    url: '/',
  },
  {
    title: 'Link1',
    url: '/link1',
    submenu: [
      {
        title: 'Submenu 1',
        url: 'submenu1',
      },
      {
        title: 'Submenu 2',
        url: 'submenu2',
        submenu: [
          {
            title: 'Sub-submenu',
            url: 'sub-submenu',
          },
          {
            title: 'Sub-submenu 2',
            submenu: [
              {
                title: 'Otro submenu',
                url: 'otrosubmenu',
              },
              {
                title: 'Otro submenu 2',
                url: 'otrosubmenu',
              },
            ],
          },
        ],
      },
      {
        title: 'Submenu 3',
        url: 'submenu3',
      },
    ],
  },
  {
    title: 'Link 2',
    url: '/link2',
    submenu: [
      {
        title: 'Mas submenus',
        url: 'massubmenus',
      },
      {
        title: 'Otro mas',
        url: 'otromas',
      },
    ],
  },
];