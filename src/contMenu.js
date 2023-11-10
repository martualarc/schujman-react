export const contMenu = [
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
            title: 'Sub-submenu 1',
            submenu: [
              {
                title: 'Otro submenu',
                url: 'otrosubmenu',
              },
              {
                title: 'Otro submenu 1',
                url: 'otrosubmenu1',
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
    title: 'Link2',
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