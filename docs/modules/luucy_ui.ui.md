# Namespace: ui

[luucy/ui](luucy_ui.md).ui

User interface components

**`example`**
//  creating a simple label and adding it to the left panel
const label = new ui.Label("Hello World!");
ui.areas.panel.add(label);

## Table of contents

### Classes

- [BarChart](../classes/luucy_ui.ui.BarChart.md)
- [Button](../classes/luucy_ui.ui.Button.md)
- [Container](../classes/luucy_ui.ui.Container.md)
- [Element](../classes/luucy_ui.ui.Element.md)
- [Image](../classes/luucy_ui.ui.Image.md)
- [Label](../classes/luucy_ui.ui.Label.md)
- [LabeledValue](../classes/luucy_ui.ui.LabeledValue.md)
- [NumberField](../classes/luucy_ui.ui.NumberField.md)
- [Panel](../classes/luucy_ui.ui.Panel.md)
- [RadioField](../classes/luucy_ui.ui.RadioField.md)
- [Section](../classes/luucy_ui.ui.Section.md)
- [TextField](../classes/luucy_ui.ui.TextField.md)

### Interfaces

- [Area](../interfaces/luucy_ui.ui.Area.md)

### Variables

- [areas](luucy_ui.ui.md#areas)

## Variables

### areas

• **areas**: `Object`

Global areas

You can add appropriate data to any area you like.

**`example`**
//  Adding a custom section to the left panel
const section = new ui.Section("Test Section");
ui.areas.panel.add(section);

**`example`**
//  Add a custom label and butto to the data and usage section
// create a container to group all of our elements together
const container = new ui.Container();
ui.areas.dataAndUsage.add(container);

// add our label and button to the container
const label = new ui.Label("Example Label");
container.add(label);

const button = new ui.Button("Example Button", () => console.log("clicked"));
container.add(button);

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `buildingAndCosts` | [`Area`](../interfaces/luucy_ui.ui.Area.md)<[`Exclude`](globals_typescript.md#exclude)<[`Element`](../classes/luucy_ui.ui.Element.md), [`Section`](../classes/luucy_ui.ui.Section.md)\>\> | Building Costs Panel  Elements and properties regarding a variants building costs can be added to this area. If multiple elements are added, make sure to group them in a `new ui.Container()`!  A 'Provided by' label will automatically be added to every element added to this area. |
| `compareVariants` | [`Area`](../interfaces/luucy_ui.ui.Area.md)<[`Exclude`](globals_typescript.md#exclude)<[`Element`](../classes/luucy_ui.ui.Element.md), [`Section`](../classes/luucy_ui.ui.Section.md)\>\> | Compare Variants Panel  Elements and properties comparing variants can be added to this area. If multiple elements are added, make sure to group them in a `new ui.Container()`!  A 'Provided by' label will automatically be added to every element added to this area. |
| `dataAndUsage` | [`Area`](../interfaces/luucy_ui.ui.Area.md)<[`Exclude`](globals_typescript.md#exclude)<[`Element`](../classes/luucy_ui.ui.Element.md), [`Section`](../classes/luucy_ui.ui.Section.md)\>\> | Data and Usage Panel  Elements and properties regarding a variants general data (like Volume, Area, ...) can be added to this area. If multiple elements are added, make sure to group them in a `new ui.Container()`!  A 'Provided by' label will automatically be added to every element added to this area. |
| `panel` | [`Area`](../interfaces/luucy_ui.ui.Area.md)<[`Section`](../classes/luucy_ui.ui.Section.md)\> | Left Panel  Add a custom section if the plugin/elements don't fit in the predefined areas (`buildingAndCosts`, `dataAndUsage`, ...). |

#### Defined in

[luucy/ui.d.ts:602](https://github.com/luucyadmin/luucy-types/blob/5fee54b/luucy/ui.d.ts#L602)
