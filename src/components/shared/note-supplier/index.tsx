import React, { Fragment } from "react";
import './note-supplier.scss';

interface INoteSupplier {
  noteText: string;
}

const NoteSupplier: React.FC<INoteSupplier> = ({ noteText }) => {
  return (
    <Fragment>
      <strong className="note-text">{noteText}</strong>
    </Fragment>
  );
};

export default NoteSupplier;
