define([

  'underscore'
  ,'lateralus'
  ,'keydrown'

  ,'aenima/components/keybindings/main'

], function (

  _
  ,Lateralus
  ,kd

  ,AEnimaKeybindings

) {
  'use strict';

  var Base = AEnimaKeybindings;

  var KeybindingsComponent = Base.extend({
    name: 'keybindings'

    /**
     * @override
     */
    ,keyPressEventMap: {
      SPACE: 'userRequestTogglePreviewPlayback'
      ,H: 'userRequestToggleHelpModal'
      ,T: 'requestOpenStylie'
      ,ESC: 'userRequestCloseModal'
    }

    /**
     * @override
     */
    ,metaKeyPressEventMap: {
      Z: 'userRequestUndo'
    }

    /**
     * @override
     */
    ,keyUpEventMap: {
      O: 'userRequestUpdateOnionSkinSettingViaKeybinding'
    }
  });

  return KeybindingsComponent;
});
