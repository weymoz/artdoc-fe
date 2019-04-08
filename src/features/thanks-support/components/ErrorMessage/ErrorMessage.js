import React from 'react';

export const ErrorMessage = ({ children }) => (
  <div className="message message_type_text message_theme_artdoc-dark message_size_m form-field__message message__control i-bem message_js_inited form-field__message_js_inited message_invalid message_showed">
    {children}
  </div>
);
