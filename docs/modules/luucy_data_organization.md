# Module: luucy/data/organization

## Table of contents

### Classes

- [Organization](../classes/luucy_data_organization.Organization.md)

### Variables

- [onOrganizationsChange](luucy_data_organization.md#onorganizationschange)

## Variables

### onOrganizationsChange

• **onOrganizationsChange**: [`Event`](../classes/luucy_event.Event.md)<[`Organization`](../classes/luucy_data_organization.Organization.md)[]\>

Is called with all organizations associated to the currently logged in user.

**`example`**
//  Show organizations
onOrganizationsChange.subscribe(organizations => {
    console.log("The current user is part of the following organizations:");

    for (let organization of organizations) {
        console.log(organization.name);
    }
});

#### Defined in

[luucy/data/organization.d.ts:41](https://github.com/luucyadmin/luucy-types/blob/5fee54b/luucy/data/organization.d.ts#L41)
