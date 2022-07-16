import { Colors, RefbookStatus } from "../../../../../types";



const enum RefStatusColor {
  SUCCESS_COLOR = ``,
  SUCCESS_BG    = `#08bd11`,

  ERROR_COLOR   = ``,
  ERROR_BG      = `#ef5350`,

  WARNING_COLOR = ``,
  WARNING_BG    = `#eee`,
};


export function getStyleByStatus(status: RefbookStatus): Colors {
  switch (status) {
    case RefbookStatus.SUCCESS: return {
      color: RefStatusColor.SUCCESS_COLOR,
      background: RefStatusColor.SUCCESS_BG,
    };

    case RefbookStatus.WARNING: return {
      color: RefStatusColor.WARNING_COLOR,
      background: RefStatusColor.WARNING_BG,
    };

    default: return {
      color: RefStatusColor.ERROR_COLOR,
      background: RefStatusColor.ERROR_BG,
    };
  }
}
