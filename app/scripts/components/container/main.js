define([

  'lateralus'

  ,'./model'
  ,'./view'
  ,'text!./template.mustache'

  ,'mantra.component.preview'
  ,'mantra.component.control-panel'

  ,'aenima.utils'

], function (

  Lateralus

  ,Model
  ,View
  ,template

  ,PreviewComponent
  ,ControlPanel

  ,utils

) {
  'use strict';

  var Base = Lateralus.Component;

  var ContainerComponent = Base.extend({
    name: 'container'
    ,Model: Model
    ,View: View
    ,template: template

    ,initialize: function () {
      this.addComponent(PreviewComponent, {
        el: this.view.$preview[0]
      });

      this.addComponent(ControlPanel, {
        el: this.view.$controlPanel[0]
      });

      this.setupInitialKeyframes();

      this.lateralus.rekapiComponent.update(0);

      if (!utils.getQueryParam('pause')) {
        this.emit('requestPlay');
      }
    }

    ,setupInitialKeyframes: function () {
      this.collectOne('currentActorModel')
        .keyframe(0, {
          translateX: '100px'
          ,translateY: '100px'
          ,rotate: '0deg'
        })
        .keyframe(1000, {
          translateX: '400px'
          ,translateY: '100px'
          ,rotate: '0deg'
        });
    }
  });

  return ContainerComponent;
});