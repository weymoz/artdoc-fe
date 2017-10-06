block('form').mod('view', 'payment')(

  addMods()({
    'has-validation': true
  }),

  content()(function() {
    return [
      {
        attrs: { id: 'payment-form' },
      }
    ]
  })
)
