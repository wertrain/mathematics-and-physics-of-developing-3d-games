var MathematicsAndPhysicsOfDeveloping3DGames = {};
{
    'use strict';

    MathematicsAndPhysicsOfDeveloping3DGames.Common = {};

    /**
     * 先頭の半角スペースとタブを（半ば決め打ちで）カット
     *
     */
    let CreateEditorText = function(shaderElementId) {
        let shaderElement = document.getElementById(shaderElementId);
        let allCode = shaderElement.innerHTML;
        let allCodeArray = allCode.split(/\r\n|\r|\n/);
        // 現在のプログラムの記述方法に合わせて
        // 先頭の半角スペースとタブを（半ば決め打ちで）カットする
        let editorText = '';
        for (let i = allCodeArray[0].length === 0 ? 1 : 0; i < allCodeArray.length - 1; ++i) {
            let temp = allCodeArray[i];
            let spaceSize = 4;
            if (temp[0] === ' ')
                temp = temp.substring(spaceSize * 2, temp.lenght)
            else if (temp[0] === '	')
                temp = temp.substring(1 * 2, temp.lenght)
            editorText += temp + '\r\n';
        }
        return editorText;
    };

    /**
     * 共通部分を初期化する。
     *
     */
    MathematicsAndPhysicsOfDeveloping3DGames.Common.initialize = function() {
        let aceUtil = new MathematicsAndPhysicsOfDeveloping3DGames.AceUtil();
        let text = CreateEditorText('js');
        aceUtil.presetEditorText('editor', text);
        aceUtil.create('editor');
    };

    MathematicsAndPhysicsOfDeveloping3DGames.Common.run = function(drawFunc) {
        let canvas = document.getElementById("canvas");
        let context = canvas.getContext("2d");
        drawFunc(context);
    };
}
