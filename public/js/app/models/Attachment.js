define(["app/app"], function(App) {
  "use strict";

  App.Attachment = DS.Model.extend({
    identifier: DS.attr('string'),
    filename: DS.attr('string'),
    isImage: DS.attr('boolean'),
    createdAt: DS.attr('number'),
    updatedAt: DS.attr('number'),

    createdBy: DS.belongsTo('user'),
    post: DS.belongsTo('post')
  })
})
