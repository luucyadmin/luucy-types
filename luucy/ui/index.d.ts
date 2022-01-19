/// <reference path="fields/index.d.ts" />
/// <reference path="table/index.d.ts" />

/// <reference path="bar-chart.d.ts" />
/// <reference path="button.d.ts" />
/// <reference path="code.d.ts" />
/// <reference path="container.d.ts" />
/// <reference path="element-container.d.ts" />
/// <reference path="element.d.ts" />
/// <reference path="icon.d.ts" />
/// <reference path="image.d.ts" />
/// <reference path="label.d.ts" />
/// <reference path="labeled-value.d.ts" />
/// <reference path="modal.d.ts" />
/// <reference path="note.d.ts" />
/// <reference path="panel.d.ts" />
/// <reference path="paragraph.d.ts" />
/// <reference path="section.d.ts" />
/// <reference path="separator.d.ts" />

declare enum State {
    success,
    warn,
    danger
}

/** 
 * User interface components
 * 
 * @example // creating a simple label and adding it to the left panel
 * const section = ui.createProjectPanelSection();
 * section.add(new ui.Label("Hello World!"));
 * 
 * section.add(new ui.Button(ui.icons.play, "Click Me!", () => {
 *     console.log("I was clicked!");
 * }));
 */
declare namespace ui {
  /**
   * Danger State
   * 
   * section.add(new ui.Note(ui.danger, "Yeah, this went south!"));
   */
  const danger: State;

    /**
    * Warn State
    * 
    * section.add(new ui.Note(ui.warn, "Oh no!"));
    */
  const warn: State;

    /**
    * Success State
    * 
    * section.add(new ui.Note(ui.success, "Some Good News"));
    */
  const success: State;

  /**
   * Creates a section for your application in the project panel.
   * The section will automatically be added to the panel.
   * 
   * @example // Create section
   * const section = ui.createProjectPanelSection();
   * section.add(new ui.Label("Test application section!"));
   */
    function createProjectPanelSection(): Container;

    /**
   * Luucy fullscreen / embedded mode
   * 
   * Fullscren mode hides all panels and bars.
   * 
   * @example // Enable fullscreen for 5 seconds
   * const button = new ui.Button(ui.icons.full, "Enable Fullscreen (5s)", () => {
   *     ui.fullscreen.enable();
   * 
   *     Timer.timeout(() => ui.fullscreen.disable(), 5000);
   * });
   */
  const fullscreen: {
    /**
     * Enables fullscreen mode
     * 
     * Do not enable fullscreen mode without any user interaction!
     */
    enable();

    /**
     * Disables fullscreen mode
     */
    disable();
  }

  /**
     * Downloads a file. If no `name` is passed, the files `name` will be used.
     * 
     * @example // Download a helloworld.txt
     * const file = File.fromString("helloworld.txt", ""Hello World!");
     * 
     * section.add(new ui.Button(ui.icons.export, "Download helloworld.txt", () => ui.download(file)));
     */
   function download(file: File, name?: string);
}