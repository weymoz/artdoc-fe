[{
  shouldDeps: [
    { mods: { 'has-validation': true, message: 'popup' } },
    { block: 'link' },
    { block: 'paragraph' },
    { block: 'text', mods: { align: 'center' } },
    { block: 'modal', mods: { autoclosable: true, 'has-close': true } },
    { block: 'fieldset' },
    {
      block: 'form-field',
      mods: {
        type: [ 'input', 'checkbox' ],
        message : 'popup',
        required: true,
        validate: 'email'
      }
    },
    { block: 'list', mods: { type: 'numeric' } },
    { block: 'button', mods: { type: 'submit', width: 'available' } }
  ]
},{
  tech: 'js',
  shouldDeps: [
    {
      tech: 'bemhtml',
      block: 'form',
      mods: {
        view: 'payment'
      }
    }
  ]
}]
