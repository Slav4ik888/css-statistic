import { Colors, RefBookStatus } from "../../../../../types";

const enum RefStatusColor {
  SUCCESS_COLOR = ``,
  SUCCESS_BG    = `#08bd11`,

  ERROR_COLOR   = ``,
  ERROR_BG      = `#ef5350`,

  WARNING_COLOR = ``,
  WARNING_BG    = `#eee`,
};

export function getStyleByStatus(status: RefBookStatus): Colors {
  switch (status) {
    case RefBookStatus.SUCCESS: return {
      color: RefStatusColor.SUCCESS_COLOR,
      background: RefStatusColor.SUCCESS_BG,
    };

    case RefBookStatus.WARNING: return {
      color: RefStatusColor.WARNING_COLOR,
      background: RefStatusColor.WARNING_BG,
    };

    case RefBookStatus.ERROR: return {
      color: RefStatusColor.ERROR_COLOR,
      background: RefStatusColor.ERROR_BG,
    };
  }
}
