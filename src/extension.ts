// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
import {MsgViewerEditor} from './msgViewerEditor';
// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
    context.subscriptions.push(vscode.commands.registerCommand('newnight.open', async (uri) => {
        
    }));
}

// This method is called when your extension is deactivated
export function deactivate() {}
