import { Injectable } from "@angular/core";
import { v4 as uuidv4 } from 'uuid';

@Injectable({ providedIn: 'root'})
export class UniqueIdService {
  private numberOfGeneratedIds = 0;
  private validIdRegex = /^[A-Za-z]+[\w\-\:\.]*$/;

  public getNumberOfGeneratedUniqueIds(): number {
    return this.numberOfGeneratedIds;
  }

  public generateUnitIdWithPrefix(prefix: string): string {
    if (!prefix || !this.validIdRegex.test(prefix)) {
      throw Error('Prefix inválid');
    }
    const uniqueId = this.generateUniqueId();
    this.numberOfGeneratedIds++;
    return `${prefix}-${uniqueId}`;
  }

  private generateUniqueId(): string {
    return uuidv4();
  }
}
