import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { DialogComponent } from '@syncfusion/ej2-angular-popups';
import { EmitType } from '@syncfusion/ej2-base';

/**
 * Default Dialog Component
 */
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
})
export class AppComponent {
  @ViewChild('Dialog') public dialogObj: DialogComponent;
  public BtnClick: EmitType<object> = () => {
    this.dialogObj.show();
  }

  public width: string = '350px';
  public hide: any;
  public isFullScreen: Boolean;
  public dialogOldPositions: any;
  public target: string = '.control-section';

  constructor() { }

  ngAfterViewInit(): void {
    document.getElementById('dlgbtn').focus();
  }
  // On Dialog close, 'Open' Button will be shown
  public dialogClose: EmitType<object> = () => {
    document.getElementById('dlgbtn').style.display = 'inline-block';
  }
  // On Dialog open, 'Open' Button will be hidden
  public dialogOpen: EmitType<object> = () => {
    document.getElementById('dlgbtn').style.display = 'none';
  }

  public maximize(): void {
    var maximizeIcon;
    if (this.dialogObj.element.classList.contains('dialog-minimized')) {
      this.dialogObj.element.querySelector('#min-btn').classList.add('sf-icon-Minimize');
      this.dialogObj.element.querySelector('#min-btn').classList.remove('sf-icon-Restore');
      this.dialogObj.element.querySelector('#min-btn').setAttribute('title', 'Minimize');
    }
    if (!this.dialogObj.element.classList.contains('dialog-maximized') && !this.isFullScreen) {
      maximizeIcon = this.dialogObj.element.querySelector(".e-dlg-header-content .sf-icon-Maximize");
    } else {
      maximizeIcon = this.dialogObj.element.querySelector(".e-dlg-header-content .sf-icon-Restore");
    }
    if (!this.dialogObj.element.classList.contains('dialog-maximized')) {
      this.dialogObj.element.classList.add('dialog-maximized');
      this.dialogObj.show(true);
      maximizeIcon.classList.add('sf-icon-Restore');
      maximizeIcon.setAttribute('title', 'Restore');
      maximizeIcon.classList.remove('sf-icon-Maximize');
      this.dialogObj.element.querySelector('.e-dlg-content').classList.remove('hide-content');
      this.isFullScreen = true;
    } else {
      this.dialogObj.element.classList.remove('dialog-maximized');
      this.dialogObj.show(false);
      maximizeIcon.classList.remove('sf-icon-Restore');
      maximizeIcon.classList.add('sf-icon-Maximize');
      maximizeIcon.setAttribute('title', 'Maximize');
      this.dialogObj.element.querySelector('.e-dlg-content').classList.remove('hide-content');
      this.dialogObj.position = this.dialogOldPositions;
      this.dialogObj.dataBind();
      this.isFullScreen = false;
    }
  }

  public minimize(): void {
    var minimizeIcon = this.dialogObj.element.querySelector(".e-dlg-header-content .sf-icon-Minimize");
    if (!this.dialogObj.element.classList.contains('e-dlg-fullscreen')) {
      if (!this.dialogObj.element.classList.contains('dialog-minimized')) {
        this.dialogOldPositions = { X: this.dialogObj.position.X, Y: this.dialogObj.position.Y }
        this.dialogObj.element.classList.add('dialog-minimized');
        this.dialogObj.element.classList.remove('dialog-maximized');
        this.dialogObj.element.querySelector('.e-dlg-content').classList.add('hide-content');
        this.dialogObj.position = { X: 'left', Y: 'bottom' };
        this.dialogObj.dataBind();
        minimizeIcon.classList.add('sf-icon-Restore');
        minimizeIcon.setAttribute('title', 'Restore');
      } else {
        this.dialogObj.element.classList.remove('dialog-minimized');
        this.dialogObj.element.querySelector('.e-dlg-content').classList.remove('hide-content');
        minimizeIcon.classList.add('sf-icon-Minimize');
        minimizeIcon.setAttribute('title', 'Minimize');
        minimizeIcon.classList.remove('sf-icon-Restore');
        this.dialogObj.position = this.dialogOldPositions;
        this.dialogObj.dataBind();
      }
    } else {
      this.dialogObj.show(false);
      this.dialogObj.element.classList.remove('dialog-maximized');
      this.dialogObj.element.classList.add('dialog-minimized');
      this.dialogObj.element.querySelector('.e-dlg-content').classList.add('hide-content');
      minimizeIcon.classList.remove('sf-icon-Minimize');
      minimizeIcon.removeAttribute('title');
      this.dialogObj.position = { X: 'left', Y: 'bottom' };
      this.dialogObj.dataBind();
      this.isFullScreen = true;
    }
  }
}