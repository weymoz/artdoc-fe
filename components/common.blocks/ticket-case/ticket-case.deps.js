({
  shouldDeps: [
    {
      elems: [
        'list-tickets-set'
      ]
    },
    { block: 'calendar', mods: { type: 'week', view: 'ticket-case' } },
    { block: 'form-field', mods: { type: 'select' } },
    { block: 'label' },
    { block: 'list', mods: { type: 'inline' } },
    { block: 'list-tickets' },
    { block: 'paragraph', mods: { bold: true } },
    { block: 'radio-group', mods: { type: 'button' } },
    { block: 'select', mods: { calendar: true, mode: 'radio' } },
    { block: 'text', mods: { format: 'datetime' } },
  ]
})