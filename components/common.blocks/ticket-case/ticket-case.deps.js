({
  shouldDeps: [
    {
      elems: [
        'list-tickets-set'
      ],
      mods: { theme: '*' }
    },
    { block: 'list-tickets' },
    { block: 'calendar', mods: { type: 'week' } },
    { block: 'radio-group', mods: { type: 'button' } },
    { block: 'text', mods: { format: 'datetime' } },
    { block: 'list', mods: { type: 'inline' } },
    { block: 'form-field', mods: { type: 'select' } },
    { block: 'label' },                
    { block: 'select', mods: { mode: 'radio' } },
    { block: 'calendar', mods: { view: 'ticket-case' } }
  ]
})