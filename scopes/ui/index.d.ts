/// <reference path="fields/index.d.ts" />
/// <reference path="table/index.d.ts" />

/// <reference path="action.d.ts" />
/// <reference path="app-section.d.ts" />
/// <reference path="area.d.ts" />
/// <reference path="bar-chart.d.ts" />
/// <reference path="button.d.ts" />
/// <reference path="code.d.ts" />
/// <reference path="container.d.ts" />
/// <reference path="element-container.d.ts" />
/// <reference path="element.d.ts" />
/// <reference path="energy-rating.d.ts" />
/// <reference path="icon.d.ts" />
/// <reference path="image.d.ts" />
/// <reference path="label.d.ts" />
/// <reference path="labeled-value.d.ts" />
/// <reference path="link-button.d.ts" />
/// <reference path="modal.d.ts" />
/// <reference path="note.d.ts" />
/// <reference path="notification.d.ts" />
/// <reference path="panel.d.ts" />
/// <reference path="paragraph.d.ts" />
/// <reference path="section.d.ts" />
/// <reference path="separator.d.ts" />
/// <reference path="upload.d.ts" />

declare enum State {
  success,
  warn,
  danger,
  info
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
   * Info (Neutral) State
   * 
   * section.add(new ui.Note(ui.info, "Some Good News"));
   */
  const info: State;

  /**
   * Creates a section for your application in the project panel.
   * The section will automatically be added to the panel
   * 
   * If your plugin contains multiple 'submodules', create multiple app sections.
   * You can provide a name or custom icon (url from assets directory)
   * 
   * @example // Create section
   * const section = ui.createProjectPanelSection();
   * section.add(new ui.Label("Test application section!"));
   * 
   * @example // Create multiple sections
   * const heatingSection = ui.createProjectPanelSection('Heating', 'heating.png');
   * heatingSection.add(new ui.Label('Heating stuff'));
   * 
   * const coolingSection = ui.createProjectPanelSection('Cooling', 'cooling.png');
   * coolingSection.add(new ui.Label('Cooling stuff'));
   */
  function createProjectPanelSection(name?: string, icon?: string): AppSection;

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
    enable(): void;

    /**
     * Disables fullscreen mode
     */
    disable(): void;
  }

  /**
     * Downloads a file. If no `name` is passed, the files `name` will be used.
     * 
     * @example // Download a helloworld.txt
     * const file = File.fromString("helloworld.txt", ""Hello World!");
     * 
     * section.add(new ui.Button(ui.icons.export, "Download helloworld.txt", () => ui.download(file)));
     */
   function download(file: File, name?: string): void;
}