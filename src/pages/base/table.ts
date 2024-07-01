import { Locator } from '@playwright/test';
import { Base } from './base';


export class Table extends Base {
  readonly table = this.locator('tbody');
  readonly tableRows = this.table.locator('tr');

  getTableRow(rowNumber: number): Locator {
    return this.tableRows.nth(rowNumber);
  }

  getTableRowCells(rowNumber: number): Locator {
    return this.getTableRow(rowNumber).locator('td');
  }

  getTableCell(rowNumber: number, columnNumber: number): Locator {
    return this.getTableRowCells(rowNumber).nth(columnNumber);
  }
}