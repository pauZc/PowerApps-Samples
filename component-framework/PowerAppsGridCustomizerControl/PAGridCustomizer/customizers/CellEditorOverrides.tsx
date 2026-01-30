import * as React from "react";
import { CellEditorOverrides, CellEditorProps, GetEditorParams } from "../types";

export const cellEditorOverrides: CellEditorOverrides = {
	["Text"]: (props:CellEditorProps, col:GetEditorParams) => {
		// TODO: Add your custom cell editor overrides here
		const colId =col.colDefs[col.columnIndex].colId;
		
		return null;
	},
};
