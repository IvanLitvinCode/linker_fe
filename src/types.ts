import type { AxiosResponse } from 'axios';
import type { Moment } from 'moment';
import type * as React from 'react';

type ShareData = {
  /**
   * category of content
   */
  category: string;
  /**
   * deeplink of content
   */
  deeplink: string;
  /**
   * document access key
   */
  access_key?: string;
  /**
   * source of content
   */
  source: string;
  /**
   * fileType of content
   */
  fileType?: string;
  /**
   * channel_id
   */
  channel_id?: string;
  /**
   * board_id
   */
  board_id?: string;
  /**
   * plain text
   */
  plain_text?: string;
  /**
   * note content
   */
  content?: string;
};

type feedCardToggleHandler = (index: number) => void;
type feedCardShareHandler = (object: ShareData) => void;
type feedCardQuickRemovalHandler = (object: FeedItemType) => void;
type feedCardDeleteHandler = (index: number) => void;
type DeleteCallbackPropsType = { bulkDelete?: boolean };
type DeleteCallbackType = (
  object?: DeleteCallbackPropsType
) => Promise<void> | void;

type FilterType = Record<string, Record<string, string[]>>;

type BasicSourceType = {
  key: string;
  label: string;
  connected: boolean;
  id: number;
  source_mapping?: string;
  thumbnail_location?: string;
};

type SourceType = BasicSourceType & {
  filter: FilterType;
  exclusion_filter?: FilterType;
};

type CategorySourceType = BasicSourceType & {
  filter: Record<string, string[]>;
  thumbnail_location?: string;
  exclusion_filter?: Record<string, string[]>;
  exclusion_rules?: Record<string, string[]>;
};

type CategoryType = {
  key: string;
  label: string;
  sources: CategorySourceType[];
};

type CommonFilterType = {
  key?: string;
  label?: string;
  filter?: Record<string, string[]>;
  exclusion_filter?: Record<string, string[]>;
};

type BoardType = {
  board_name: string;
  description?: string;
  type: string;
  keywords: {
    include: string[];
    exclude: string[];
  };
  categories: CategoryType[];
  people: {
    include: string[];
    exclude: string[];
  };
  common?: Record<string, CommonFilterType>;
  date_range: string;
  group?: string;
  parent_id?: string;
  publish?: boolean;
  path?: string;
};

type FeedSourceType = 'sources' | 'documents' | 'media' | 'tags';

type KeywordTableRow = {
  keyword: string;
  valid: boolean;
};

type BoardContextType = Omit<BoardType, 'keywords'> & {
  keywords: {
    include: KeywordTableRow[];
    exclude: KeywordTableRow[];
  };
};

type FeedTemplateType = 'needl' | 'organization';

type FeedType = {
  key: FeedSourceType | FeedTemplateType;
  label: string;
  description: string;
};

type CommonComponentType = {
  /**
   * Button override styles
   */
  style?: React.CSSProperties;
  /**
   * Button override classes
   */
  className?: string;
};

type HandlersType = {
  /**
   * in edit mode? (multiselect, etc.)
   */
  editMode: boolean;
  /**
   * toggle handler for selecting / de-selecting cards
   */
  toggleHandler: feedCardToggleHandler;
  /**
   * handler to trigger share
   */
  shareHandler: feedCardShareHandler;
  /**
   * handler to trigger quick removal
   */
  quickRemovalHandler: feedCardQuickRemovalHandler;
  /**
   * handler to trigger delete
   */
  deleteDocumentHandler: feedCardDeleteHandler;
};

type Dimensions = { width: number; height: number };
type Source =
  | 'dropbox'
  | 'googledrive'
  | 'onedrive'
  | 'outlook'
  | 'gmail'
  | 'evernote'
  | 'onenote'
  | 'whatsapp'
  | 'telegram'
  | 'teams'
  | 'slack';

type FeedItemType = {
  /**
   * financial documents, value exist if an attachment exist
   */
  attachmentname?: string;
  /**
   * unix timestamp
   */
  unix: number;
  /**
   * published_time
   */
  published_time?: number;
  /**
   * board_id
   */
  board_id?: string;
  /**
   * doc_id
   */
  doc_id: string;
  /**
   * source of data
   */
  source: string;
  /**
   * array of sources of the data
   */
  sources?: Array<Source>;
  /**
   * category it belongs to
   */
  category: string;
  /**
   * category tab of the doc
   */
  category_tab?: string;
  /**
   * is the card selected?
   */
  selected: boolean;
  /**
   * mime_type incase of documents/drives
   */
  mime_type?: string;
  /**
   * user name
   */
  user_name?: string;
  /**
   * chat group
   */
  group_name?: string;
  /**
   * chat group ua
   */
  group_name_ua?: string;
  /**
   * team name
   */
  team_name?: string;
  /**
   * team name ua
   */
  team_name_ua?: string;
  /**
   * email folder
   */
  email_labels_ua?: string[];
  /**
   * sender name
   */
  sender_name?: string;
  /**
   * sender_name in lowercase
   */
  sender_name_ua?: string;
  /**
   * chat text
   */
  formattedBody?: string;
  /**
   * link incase of news/blogs
   */
  link?: string | string[];
  /**
   * subject for email
   */
  subject?: string;
  /**
   * origin_email id of the email
   */
  origin_email?: string;
  /**
   * origin_email_ua of the email
   */
  origin_email_ua?: string;
  /**
   * origin_domain_ua is the domain of the email
   */
  origin_domain_ua?: string;
  /**
   * sender_mail_id of the email
   */
  sender_mail_id?: string;
  /**
   * an array of recipients email ids
   */
  recipient_emails?: string[];
  /**
   * cc details of the email
   */
  recipient_cc_emails?: string[];
  /**
   * email body
   */
  body?: string;
  /**
   * parsed body for links/news/blogs
   */
  body_parsed?: string;
  /**
   * note_id
   */
  note_id?: string;
  /**
   * note_guid
   */
  note_guid?: string;
  /**
   * notebook_guid
   */
  notebook_guid?: string;
  /**
   * note title
   */
  note_title?: string;
  /**
   * notebook title
   */
  notebook_title?: string;
  /**
   * notebook_title_ua is the notebook title in lowercase
   */
  notebook_title_ua?: string;
  /**
   * note body
   */
  content?: string;
  /**
   * company id
   */
  company_id?: string;
  /**
   * company name
   */
  company_name?: string;
  /**
   * form
   */
  form?: string;
  /**
   * form_ua
   */
  form_ua?: string;
  /**
   * object location
   */
  object_location?: string;
  /**
   * file_content
   */
  file_content?: string;
  /**
   * sentiment link
   */
  sentiment_link?: string;
  /**
   * security_code
   */
  security_code?: string;
  /**
   * security_id
   */
  security_id?: string;
  /**
   * cin
   */
  cin?: string;
  /**
   * cik
   */
  cik?: number;
  /**
   * isin
   */
  isin?: string;
  /**
   * file_number
   */
  file_number?: string;
  /**
   * film_number
   */
  film_number?: string;
  /**
   * image location
   */
  image_location?: string | string[];
  /**
   * report_year
   */
  report_year?: number;
  /**
   * quarter
   */
  quarter?: string;
  /**
   * listed
   */
  listed?: string;
  /**
   * instrument
   */
  instrument?: string;
  /**
   * industry
   */
  industry?: string;
  /**
   * newssub
   */
  newssub?: string;
  /**
   * headline
   */
  headline?: string;
  /**
   * year
   */
  year?: string;
  /**
   * link_to_report
   */
  link_to_report?: string;
  /**
   * highlights
   */
  highlights?: string[];
  /**
   * original_filename
   */
  original_filename?: string[];
  /**
   * tags - directory for drives
   */
  tags?: string;
  /**
   * tags ua
   */
  tags_ua?: string;
  /**
   * title
   */
  title?: string;
  /**
   * author_institution
   */
  author_institution?: string;
  /**
   * report_type
   */
  report_type?: string;
  /**
   * main_company
   */
  main_company?: string;
  /**
   * isbn
   */
  isbn?: string;
  /**
   * company_coverage_type
   */
  company_coverage_type?: string;
  /**
   * book_authors
   */
  book_authors?: string[];
  /**
   * recommendation
   */
  recommendation?: string;
  /**
   * price_target
   */
  price_target?: string;
  /**
   * sector_coverage_type
   */
  sector_coverage_type?: string;
  /**
   * retained_sources
   */
  retained_sources?: string[];
  /**
   * sender_group
   */
  sender_group?: string;
  /**
   * sender_group in lowercase
   */
  sender_group_ua?: string;
  /**
   * external_access_link
   */
  external_access_link?: string;
  /**
   * title_candidates
   */
  title_candidates?: string[];
  /**
   * sectors_covered
   */
  sectors_covered?: string[];
  /**
   * original_document_link
   */
  original_document_link?: string;
  /**
   * generalized_mime_type
   */
  generalized_mime_type?: string;
  /**
   * companies_mentioned
   */
  companies_mentioned?: string[];
  /**
   * sequencer
   */
  sequencer?: number;
  /**
   * file_size
   */
  file_size?: number;
  /**
   * dimension
   */
  dimensions?: Dimensions;
  /**
   * embedded_link
   */
  embedded_link?: string;
  /**
   * name
   */
  name?: string;
  /**
   * user
   */
  user?: string;
  /**
   * user_ua
   */
  user_ua?: string;
  /**
   * original_source_id
   */
  original_source_id?: string;
  /**
   * type
   */
  type?: string;
  /**
   * additional_content
   */
  additional_content?: string;
  /**
   * author
   */
  author?: string;
  /**
   * categories
   */
  categories?: string;
  /**
   * extracted_image_imgproxy
   */
  extracted_image_imgproxy?: string;
  /**
   * source_type
   */
  source_type?: string;
  /**
   * retained_link_to_resources
   */
  retained_link_to_resources?: string[];
  /**
   * links
   */
  links?: string[];
  /**
   * mime_types
   */
  mime_types?: string[];
  /**
   * original_attachment_lists
   */
  original_attachment_lists?: string[];
  /**
   * is_user_sender
   */
  is_user_sender?: boolean;
  /**
   * is_placeholder_doc -> data from teams
   */
  is_placeholder_doc?: string;
  /**
   * chat_type_ua
   */
  chat_type_ua?: string;
  /**
   * timestamp
   */
  timestamp?: number;
  /**
   * extracted_title
   */
  extracted_title?: string;
  /**
   * plain_text
   */
  plain_text?: string;
  /**
   * dimensions list
   */
  retained_dimensions?: Dimensions[];
  /**
   * src link of thumbnail
   */
  thumbnail_location?: string;
  /**
   * label
   */
  label?: string;
  /**
   * label in lowercase
   */
  label_ua?: string;
  /**
   * source details
   */
  source_details?: Record<string, string>;
  /**
   * BSE secondary cateogry
   */
  secondary_category?: string[];
  /**
   * BSE secondary cateogry ua
   */
  secondary_category_ua?: string[];
  /**
   * BSE Indices
   */
  indices?: IndiceType[];
  /**
   * contacts info for the card
   */
  contacts_for_people_filter?: string[];
  /**
   * document deep link
   */
  deeplink: string;
  /**
   * document private access key
   */
  access_key?: string;
  /**
   * document public access key
   */
  public_access_key?: string;
  /**
   * result from haystack?
   */
  isHayStack?: boolean;
  DPRScore?: string;
  answer?: string;
  /**
   * channel_id
   */
  channel_id?: string;
  /**
   * email origin name
   */
  origin_name?: string;
  /**
   * is_replied
   */
  is_replied?: boolean;
  /**
   * is_forwarded
   */
  is_forwarded?: boolean;
  /**
   * message
   */
  message?: string;
  /**
   * replied_fields
   */
  replied_fields?: {
    sender?: string;
    message?: string;
    type?: string;
    mimetype?: string;
  };
  /**
   * score
   */
  score?: number;
  /**
   * content_parsed
   */
  content_parsed?: string;
  /**
   * note_author
   */
  note_author?: string;
  /**
   * origin_name in lowercase
   */
  origin_name_ua?: string;
  original_document_mime?: string;
  original_document_name?: string;
  doc_title?: string;
  /**
   * comment document
   */
  document?: string;
  comment_created_at?: string;
  channel_name?: string;
  /**
   * comment owner username
   */
  username?: string;
  /**
   * sent only for comments, represents es response category
   */
  origin_category?: string;
};

type FeedCardType = {
  /**
   * data from API
   */
  result: FeedItemType;
  /**
   * event handlers
   */
  handlers: HandlersType;
  /**
   * index of the card in the feed
   */
  index: number;
};

type PreviewType = {
  /**
   * preview data
   */
  data: FeedItemType;
  /**
   * chat delete triggered
   */
  deleteTriggered: string;
  /**
   * Share handler
   */
  handleShare: () => void;
  /**
   * edit handler
   */
  handleEdit?: () => void;
  /**
   * Delete handler
   */
  handleDelete?: () => void;
  /**
   * show delete button
   */
  isChannel?: boolean;
  /**
   * selected items
   */
  selectedItems?: FeedItemType[];
  /**
   * number of items selected
   */
  selectedItemsCount?: number;
  /**
   * setActionsState for chats
   */
  setActionsState: (selectedItems: FeedItemType[]) => void;
  /**
   * single chat select handler
   */
  setChatData?: (selectedItem: FeedItemType) => void;
  handleDeleteAll?: () => void;
  /**
   * quick removal handler
   */
  handleQuickRemoval?: (data: FeedItemType) => void;
  tab?: 'exchange' | 'document';
};

type IndiceType = {
  index_id: string;
  index_name: string;
};
type ParamsType = Record<
  string,
  | string
  | number
  | string[]
  | number[]
  | (string | number)[]
  | Record<string, unknown>
  | undefined
>;

type Colors =
  | 'black'
  | 'gray'
  | 'red'
  | 'yellow'
  | 'green'
  | 'blue'
  | 'indigo'
  | 'purple'
  | 'pink'
  | 'emerald'
  | 'white';

type CommonTextdecorationType = {
  /**
   * should the link text be bold?
   */
  bold?: boolean;
  /**
   * text color
   */
  color?: Colors;
  /**
   * darker color (900)?
   */
  dark?: boolean;
  /**
   * link text size
   */
  size?: 'xxl' | 'xl' | 'lg' | 'normal' | 'sm' | 'xs';
};

type SummaryCardType = {
  /**
   * selected data
   */
  body: string;
  /**
   * unique id
   */
  id: string;
  /**
   * search term for highlight
   */
  searchTerm?: string;
  /**
   * source file name or any other
   */
  title: string;
  /**
   * deeplink of the doc from which the paragraph was clipped
   */
  deeplink?: string;
  /**
   * board_id
   */
  board_id?: string;
  /**
   * source is of the source of the file eg.documents, bse_conf_calls, etc. used to arrive at the index in the backend.
   */
  source?: string;
};

type FormikFieldValiadtionType = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  validate?: (value: any) => undefined | string | Promise<any>;
};

type CommonBoxSizingType = {
  /**
   * padding top, bottom
   */
  px?: 'px-0' | 'px-1' | 'px-2' | 'px-2.5' | 'px-3' | 'px-4' | 'px-5' | 'px-6';
  /**
   * padding left, right
   */
  py?: 'py-0' | 'py-1' | 'py-2' | 'py-2.5' | 'py-3' | 'py-4' | 'py-5' | 'py-6';
  /**
   * padding top
   */
  pt?: 'pt-0' | 'pt-1' | 'pt-2' | 'pt-2.5' | 'pt-3' | 'pt-4' | 'pt-5' | 'pt-6';
  /**
   * padding right
   */
  pr?: 'pr-0' | 'pr-1' | 'pr-2' | 'pr-2.5' | 'pr-3' | 'pr-4' | 'pr-5' | 'pr-6';
  /**
   * padding bottom
   */
  pb?: 'pb-0' | 'pb-1' | 'pb-2' | 'pb-2.5' | 'pb-3' | 'pb-4' | 'pb-5' | 'pb-6';
  /**
   * padding left
   */
  pl?: 'pl-0' | 'pl-1' | 'pl-2' | 'pl-2.5' | 'pl-3' | 'pl-4' | 'pl-5' | 'pl-6';
  /**
   * margin top, bottom
   */
  mx?: 'mx-0' | 'mx-1' | 'mx-2' | 'mx-2.5' | 'mx-3' | 'mx-4' | 'mx-5' | 'mx-6';
  /**
   * margin left, right
   */
  my?: 'my-0' | 'my-1' | 'my-2' | 'my-2.5' | 'my-3' | 'my-4' | 'my-5' | 'my-6';
  /**
   * margin top
   */
  mt?: 'mt-0' | 'mt-1' | 'mt-2' | 'mt-2.5' | 'mt-3' | 'mt-4' | 'mt-5' | 'mt-6';
  /**
   * margin right
   */
  mr?: 'mr-0' | 'mr-1' | 'mr-2' | 'mr-2.5' | 'mr-3' | 'mr-4' | 'mr-5' | 'mr-6';
  /**
   * margin bottom
   */
  mb?: 'mb-0' | 'mb-1' | 'mb-2' | 'mb-2.5' | 'mb-3' | 'mb-4' | 'mb-5' | 'mb-6';
  /**
   * margin left
   */
  ml?: 'ml-0' | 'ml-1' | 'ml-2' | 'ml-2.5' | 'ml-3' | 'ml-4' | 'ml-5' | 'ml-6';
};

interface TreeItemContentType {
  /**
   * nested tree status icon
   */
  expansionIcon?: React.ReactNode;
  /**
   * show peoples icon
   */
  showPeoplesIcon?: boolean;
  /**
   * peoples icon
   */
  peoplesIcon?: React.ReactNode;
  /**
   * content icon
   */
  Icon?: React.FunctionComponent;
  /**
   * content displayed in the tree item
   */
  label?: React.ReactNode;
  /**
   * unique node id
   */
  nodeId?: string;
  /**
   * onClick handler
   */
  onClick?: (event: React.MouseEvent<Element>) => void;
  /**
   * onMouseDown handler
   */
  onMouseDown?: (event: React.MouseEvent<Element>) => void;
  /**
   * suffix string/component
   */
  suffix?: React.ReactNode;
}

type FeedNavDataType = {
  /**
   * backend friendly value
   */
  key: string;
  /**
   * User friendly value
   */
  label: string;
  /**
   * category of the source
   */
  category?: string;
  /**
   * custom thumbnail location, if any
   */
  thumbnail_location?: string;
};

type UseFetchNavReturnType = {
  /**
   * data is array/list of objects containing `key`, and `label`
   */
  data: Array<FeedNavDataType> | undefined;
  /**
   * isLoading from react-query
   */
  isLoading: boolean;
  /**
   * isError from react-query
   */
  isError: boolean;
  /**
   * is refetching query?
   */
  isFetching: boolean;
  /**
   * error from react-query
   */
  error: unknown;
};

type RouteParam = {
  /**
   * type of feed. apps/feeds/needlbox
   */
  category: string;
  /**
   * feed/app name
   */
  source: string;
  /**
   * type filter on source. all/doc/media/links
   */
  subCategory: string;
};

type CustomFeedNavDataType = {
  /**
   * board id
   */
  board_id: string;
  /**
   * board name
   */
  board_name: string;
  /**
   * custom feed group
   */
  group?: 'default' | 'starred';
  /**
   * no_of_channels the feed has been shared
   */
  no_of_channels_shared?: number;
  /**
   * parent folder_id of feed
   */
  parent_id?: string;
  /**
   * folder path
   */
  path?: string;
  /**
   * whether feed is published
   */
  publish?: boolean;
  /**
   * feed type
   */
  type?: 'sources' | 'documents' | 'media';
  /**
   * whether feed includes private data sources
   */
  has_private_sources?: boolean;
  /**
   * channel id if the board has been shared
   */
  channel_id?: string;
};

type SortType = {
  /**
   * sort type, date, recent
   */
  sort: string;
  /**
   * sort order
   */
  order: 'asc' | 'desc';
};

type ServerSortMap = (props: { id: string; desc?: boolean }) => SortType;

type Sort = Record<string, SortType>;

type DateState = {
  /**
   * start date moment instance
   */
  startDate: Nullable<Moment>;
  /**
   * end date moment instance
   */
  endDate: Moment;
  /**
   * short hand date option
   */
  durationOption: string;
};

type Contact = {
  contact_id: string;
  contact_name: string;
  contact_source: string;
};

type People = {
  people_id: string;
  people_name: string;
  people_priority: string;
  contacts: Contact[];
  disableActions?: boolean;
};

type FacetFilter = {
  /**
   * filter name
   */
  key: string;
  /**
   * value
   */
  value?: string;
  /**
   * id
   */
  id?: string;
};

type PeopleFilter = {
  people_id: string;
  people_name?: string;
};

type Filter = Record<string, unknown>;

type CategoryFilter = Record<string, Array<Filter>>;

type SourceFilter = Record<string, CategoryFilter>;

type FacetType = {
  /**
   * dictionary of filters
   */
  facets: SourceFilter;
  /**
   * list of quick_facets
   */
  quick_facets: Array<string>;
  /**
   * dictionary of sort options
   */
  sort: Sort;
  /**
   * number of feed results
   */
  count: number;
};

type FacetResponse = AxiosResponse<FacetType>;

type DateFilter = {
  dateRange: {
    /**
     * date range type, week, month, custom
     */
    durationOption: string;
    /**
     * moment instance
     */
    startDate: string;
    /**
     * moment instance
     */
    endDate: string;
  };
};

type LocationState = {
  filtersFromUI: Record<string, unknown>;
  sortOptionsFromUI: string;
} & DateFilter;

type CommonRouteState = { label: string };

type PopoverPosition = 'default' | 'match width' | 'right';

type BundleSourceType = {
  /**
   * custom app messaging
   */
  appMessage?: string;
  /**
   * key
   */
  value: string;
  /**
   * display label
   */
  label: string;
  /**
   * is the app a private source?
   */
  private?: boolean;
  /**
   * flag - whether RSS is already connected
   */
  flag?: boolean;
  /**
   * thumbnail location for RSS sources
   */
  thumbnail_location?: string;
  /**
   * is the source selected?
   */
  selected?: boolean;
  /**
   * is the source disabled?
   */
  disabled?: boolean;
  /**
   * disable Primary button
   */
  disablePrimaryButton?: boolean;
  /**
   * topic
   */
  topic?: string;
};

type UserStatusType = { user_status: 'existing' | 'new' };
type UseUserStatus = {
  userStatusData: AxiosResponse<UserStatusType> | undefined;
  userStatusLoading: boolean;
  userStatusFetching: boolean;
};

type OmitCommon<T, K> = Omit<T, keyof K> & K;

type PaginationItemTypes =
  | 'page'
  | 'first'
  | 'previous'
  | 'start-ellipsis'
  | 'end-ellipsis'
  | 'next'
  | 'last';

type PaginationItem = {
  onClick: (event: React.MouseEvent) => void;
  type: PaginationItemTypes;
  page: number;
  selected: boolean;
  disabled: boolean;
  ariaCurrent?: string;
};

type PaginationItems = PaginationItem[];

type Priority = 'LOW' | 'MEDIUM' | 'HIGH';
type RssSource = {
  source_id: string;
  priority: Priority;
};

type FetchRssSource = {
  isLoading?: boolean;
  source_id: string;
  priority: Priority;
  label: string;
  link_to_crawl: string;
  thumbnail_location: string;
};

type Merge<T, F> = Omit<T, keyof F> & F;

type Nullable<T> = T | null;

type PartialPick<T, K extends keyof T> = Pick<Partial<T>, K> & Omit<T, K>;

type SearchOptions = 'shared_data' | 'needl_web';

export type {
  BundleSourceType,
  CommonRouteState,
  FacetResponse,
  FacetType,
  FeedNavDataType,
  CustomFeedNavDataType,
  Filter,
  CategoryFilter,
  DateFilter,
  SourceFilter,
  Sort,
  SortType,
  ServerSortMap,
  RouteParam,
  UseFetchNavReturnType,
  TreeItemContentType,
  CommonBoxSizingType,
  FormikFieldValiadtionType,
  SummaryCardType,
  Colors,
  CommonTextdecorationType,
  ParamsType,
  PreviewType,
  FeedCardType,
  FeedItemType,
  Dimensions,
  HandlersType,
  CommonComponentType,
  feedCardShareHandler,
  ShareData,
  feedCardToggleHandler,
  DeleteCallbackPropsType,
  DeleteCallbackType,
  Nullable,
  DateState,
  PopoverPosition,
  FilterType,
  LocationState,
  SourceType,
  CategorySourceType,
  CategoryType,
  CommonFilterType,
  BoardType,
  KeywordTableRow,
  BoardContextType,
  FeedType,
  FeedSourceType,
  FeedTemplateType,
  PartialPick,
  UserStatusType,
  UseUserStatus,
  OmitCommon,
  PaginationItem,
  PaginationItems,
  PaginationItemTypes,
  People,
  Contact,
  FacetFilter,
  PeopleFilter,
  Source,
  Priority,
  RssSource,
  FetchRssSource,
  Merge,
  SearchOptions,
};
