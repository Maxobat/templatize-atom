'use babel';

import { CompositeDisposable } from 'atom';
import templatize from 'templatize-string';

export default {

  subscriptions: null,

  activate(state) {
    this.subscriptions = new CompositeDisposable();

    this.subscriptions.add(atom.commands.add('atom-workspace', {
      'templatize-string:fetch': () => this.fetch()
    }))
  },

  deactivate() {
    this.subscriptions.dispose()
  },

  fetch() {
    let editor

    if (editor = atom.workspace.getActiveTextEditor()) {
        let selection = editor.getSelectedText()
        editor.insertText(templatize(selection).renderWrapped('`'))
    }
  }

};
