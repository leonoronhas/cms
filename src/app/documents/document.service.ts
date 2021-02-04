import { EventEmitter, Injectable } from '@angular/core';
import { from } from 'rxjs';
import { MOCKCONTACTS } from '../contacts/MOCKCONTACTS';
import { Document } from './document.model';
import { MOCKDOCUMENTS } from './MOCKDOCUMENTS';

@Injectable({
  providedIn: 'root'
})

export class DocumentService {
  documents: Document[] = [];
  documentSelectedEvent: EventEmitter<Document> = new EventEmitter<Document>();

  constructor() {
    this.documents = MOCKDOCUMENTS;
   }

   getDocuments(): Document[] {
    return this.documents
    .sort((a, b) => a.name > b.name ? 1 : b.name > a.name ? -1 : 0)
    .slice();
  }

  getDocument(id: string): Document {
    return this.documents.find((document) => document.id === id);
  }
}
