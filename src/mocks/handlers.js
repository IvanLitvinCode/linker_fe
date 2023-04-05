import { BoardsHandlers } from './board';
import { ChannelsHandlers } from './channels';
import { ConnectHandlers } from './connect';
import { DeleteHandlers } from './delete';
import { AppDocHandlers, DocumentDocHandlers, SyncAppHandlers } from './doc';
import { FeatureHandlers } from './feature';
import { FoldersHandlers } from './folders';
import { NotesHandlers } from './notes';
import { PeopleHandlers } from './people';
import { PortfolioHandlers } from './portfolios';
import { PreferenceHandler } from './preference';
import { SaveSummaryHandlers } from './save-summary';
import { AutosuggestHandlers, SearchHandlers } from './search';
import { SourcesHandlers } from './sources';
import { StorageHandlers } from './storage';
import { TagHandlers } from './tag';
import { TemplatesHandlers } from './templates';
import { UserSettingsHandlers } from './user';
import { CommentHandlers } from './comments';

export const handlers = [
  ...SyncAppHandlers,
  ...AppDocHandlers,
  ...AutosuggestHandlers,
  ...BoardsHandlers,
  ...ConnectHandlers,
  ...ChannelsHandlers,
  ...FoldersHandlers,
  ...TemplatesHandlers,
  ...DeleteHandlers,
  ...DocumentDocHandlers,
  ...FeatureHandlers,
  ...PeopleHandlers,
  ...SearchHandlers,
  ...SourcesHandlers,
  ...StorageHandlers,
  ...TagHandlers,
  ...PreferenceHandler,
  ...SaveSummaryHandlers,
  ...NotesHandlers,
  ...UserSettingsHandlers,
  ...PortfolioHandlers,
  ...CommentHandlers,
];
