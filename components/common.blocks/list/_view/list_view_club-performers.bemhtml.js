block('list').mod('view', 'club-performers').content()(function() {
  const performers = [
    { name: 'Алёна Солнцева'        , role: 'Кинокритик', userpic: 'userpic_Solnceva.png'    },
    { name: 'Андрей Архангельский'  , role: 'Кинокритик', userpic: 'userpic_Arxangel.png'    },
    { name: 'Андрей Плахов'         , role: 'Кинокритик', userpic: 'userpic_Plaxov.png'      },
    { name: 'Андрей Шемякин'        , role: 'Кинокритик', userpic: 'userpic_Zhemyakin.png'   },
    { name: 'Антон Долин'           , role: 'Кинокритик', userpic: 'userpic_Dolin.png'       },
    { name: 'Василий Корецкий'      , role: 'Кинокритик', userpic: 'userpic_Korezkiy.png'    },
    { name: 'Виктор Матизен'        , role: 'Кинокритик', userpic: 'userpic_Matizen.png'     },
    { name: 'Константин Шавловский' , role: 'Кинокритик', userpic: 'userpic_Zhavlovskiy.png' },
    { name: 'Виктория Смирнова'     , role: 'Кинокритик', userpic: 'userpic_Smirnova.png'    },
    { name: 'Елена Стишова'         , role: 'Кинокритик', userpic: 'userpic_Stishova.png'    },
    { name: 'Зара Абдуллаева'       , role: 'Кинокритик', userpic: 'userpic_Abdulaeva.png'   },
    { name: 'Лариса Малюкова'       , role: 'Кинокритик', userpic: 'userpic_Malukova.png'    },
    { name: 'Любовь Аркус'          , role: 'Кинокритик', userpic: 'userpic_Arkus.png'       },
    { name: 'Никита Карцев'         , role: 'Кинокритик', userpic: 'userpic_Karcev.png'      },
    { name: 'Ольга Галицкая'        , role: 'Кинокритик', userpic: 'userpic_Galitskay.png'   },
    { name: 'Ольга Шервуд'          , role: 'Кинокритик', userpic: 'userpic_Sherwood.png'    },
    { name: 'Татьяна Ершова'        , role: 'Кинокритик', userpic: 'userpic_Ershova.png'     },
  ]

  return performers.map( performer => {
    return {
      elem: 'item',
      content: {
        block: 'card-author',
        mods: { view: 'club-performer' },
        content: [
          {
            block: 'image',
            mods: {
              circle: true
            },
            mix: { block: 'card-author', elem: 'aside' },
            url: '/assets/img/filmmaker/' + performer.userpic,
            alt: performer.name + ', ' + performer.role.toLowerCase()
          },
          {
            elem: 'content',
            content: [
              {
                elem: 'name',
                content: performer.name
              },
              {
                elem: 'role',
                content: performer.role
              }
            ]
          }
        ]
      }
    }
  } )
});