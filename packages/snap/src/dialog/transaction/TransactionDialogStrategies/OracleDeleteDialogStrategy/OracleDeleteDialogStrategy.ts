import type { Component } from '@metamask/snaps-sdk';
import type { Transaction, OracleDelete } from 'xrpl';

import { AccountComponent, FeeComponent, TransactionTypeComponent } from '../../TransactionComponents';
import { OracleDocumentIDComponent } from '../../TransactionComponents/oracle/oracle';
import type { TransactionDialogStrategy } from '../TransactionDialogStrategies.types';

export class OracleDeleteDialogStrategy implements TransactionDialogStrategy<OracleDelete> {
  transactionType: Transaction['TransactionType'] = 'OracleDelete';

  /**
   * Builds the body of the dialog for a OracleDeleteDialogStrategy transaction.
   * Supported fields:
   * - TransactionType
   * - Account
   * - OracleDocumentID (number)
   * - Fee XRPAmount
   * TODO(jordi) Missing fields:
   * - Flags
   *
   * @param transaction - The transaction to build the dialog for
   * @returns Components to render in the dialog
   */
  buildBody(transaction: OracleDelete): Component[] {
    return [
      ...TransactionTypeComponent(this.transactionType),
      ...AccountComponent(transaction.Account),
      ...OracleDocumentIDComponent(transaction.OracleDocumentID),
      ...FeeComponent(transaction.Fee),
    ];
  }
}