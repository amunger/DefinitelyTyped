import { AbstractCrudObject } from "./../abstract-crud-object";
import AbstractObject from "./../abstract-object";
import Cursor from "./../cursor";
import StoreCatalogSettings from "./store-catalog-settings";
import ProductCatalogCategory from "./product-catalog-category";
import CPASLsbImageBank from "./cpas-lsb-image-bank";
import HomeListing from "./home-listing";
import Hotel from "./hotel";
import ProductFeed from "./product-feed";
import ProductGroup from "./product-group";
import ProductSet from "./product-set";
import ProductItem from "./product-item";
import Vehicle from "./vehicle";
/**
 * ProductCatalog
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class ProductCatalog extends AbstractCrudObject {
    static get Fields(): Readonly<{
        ad_account_to_collaborative_ads_share_settings: "ad_account_to_collaborative_ads_share_settings";
        agency_collaborative_ads_share_settings: "agency_collaborative_ads_share_settings";
        business: "business";
        catalog_store: "catalog_store";
        commerce_merchant_settings: "commerce_merchant_settings";
        creator_user: "creator_user";
        da_display_settings: "da_display_settings";
        default_image_url: "default_image_url";
        fallback_image_url: "fallback_image_url";
        feed_count: "feed_count";
        id: "id";
        is_catalog_segment: "is_catalog_segment";
        is_local_catalog: "is_local_catalog";
        name: "name";
        owner_business: "owner_business";
        product_count: "product_count";
        store_catalog_settings: "store_catalog_settings";
        user_access_expire_time: "user_access_expire_time";
        vertical: "vertical";
    }>;
    static get AdditionalVerticalOption(): Readonly<{
        local_da_catalog: "LOCAL_DA_CATALOG";
        local_products: "LOCAL_PRODUCTS";
    }>;
    static get Vertical(): Readonly<{
        adoptable_pets: "adoptable_pets";
        commerce: "commerce";
        destinations: "destinations";
        flights: "flights";
        generic: "generic";
        home_listings: "home_listings";
        hotels: "hotels";
        jobs: "jobs";
        local_service_businesses: "local_service_businesses";
        offer_items: "offer_items";
        offline_commerce: "offline_commerce";
        transactable_items: "transactable_items";
        vehicles: "vehicles";
    }>;
    static get PermittedRoles(): Readonly<{
        admin: "ADMIN";
        advertiser: "ADVERTISER";
    }>;
    static get PermittedTasks(): Readonly<{
        aa_analyze: "AA_ANALYZE";
        advertise: "ADVERTISE";
        manage: "MANAGE";
        manage_ar: "MANAGE_AR";
    }>;
    static get Tasks(): Readonly<{
        aa_analyze: "AA_ANALYZE";
        advertise: "ADVERTISE";
        manage: "MANAGE";
        manage_ar: "MANAGE_AR";
    }>;
    static get Standard(): Readonly<{
        google: "google";
    }>;
    static get ItemSubType(): Readonly<{
        appliances: "APPLIANCES";
        baby_feeding: "BABY_FEEDING";
        baby_transport: "BABY_TRANSPORT";
        beauty: "BEAUTY";
        bedding: "BEDDING";
        cameras: "CAMERAS";
        cell_phones_and_smart_watches: "CELL_PHONES_AND_SMART_WATCHES";
        cleaning_supplies: "CLEANING_SUPPLIES";
        clothing: "CLOTHING";
        clothing_accessories: "CLOTHING_ACCESSORIES";
        computers_and_tablets: "COMPUTERS_AND_TABLETS";
        diapering_and_potty_training: "DIAPERING_AND_POTTY_TRAINING";
        electronics_accessories: "ELECTRONICS_ACCESSORIES";
        furniture: "FURNITURE";
        health: "HEALTH";
        home_goods: "HOME_GOODS";
        jewelry: "JEWELRY";
        nursery: "NURSERY";
        printers_and_scanners: "PRINTERS_AND_SCANNERS";
        projectors: "PROJECTORS";
        shoes_and_footwear: "SHOES_AND_FOOTWEAR";
        software: "SOFTWARE";
        toys: "TOYS";
        tvs_and_monitors: "TVS_AND_MONITORS";
        video_game_consoles_and_video_games: "VIDEO_GAME_CONSOLES_AND_VIDEO_GAMES";
        watches: "WATCHES";
    }>;
    deleteAgencies(params?: Record<string, any>): Promise<any>;
    getAgencies(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    createAgency(fields: string[], params?: Record<string, any>, pathOverride?: string | null): Promise<ProductCatalog>;
    deleteAssignedUsers(params?: Record<string, any>): Promise<any>;
    getAssignedUsers(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    createAssignedUser(fields: string[], params?: Record<string, any>, pathOverride?: string | null): Promise<ProductCatalog>;
    getAutomotiveModels(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    createBatch(fields: string[], params?: Record<string, any>, pathOverride?: string | null): Promise<ProductCatalog>;
    createCatalogStore(fields: string[], params?: Record<string, any>, pathOverride?: string | null): Promise<StoreCatalogSettings>;
    getCategories(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    createCategory(fields: string[], params?: Record<string, any>, pathOverride?: string | null): Promise<ProductCatalogCategory>;
    getCheckBatchRequestStatus(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    getCollaborativeAdsLsbImageBank(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    getCollaborativeAdsShareSettings(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    createCpasLsbImageBank(fields: string[], params?: Record<string, any>, pathOverride?: string | null): Promise<CPASLsbImageBank>;
    getCreatorAssetCreatives(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    getDataSources(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    getDestinations(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    getDiagnostics(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    getEventStats(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    deleteExternalEventSources(params?: Record<string, any>): Promise<any>;
    getExternalEventSources(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    createExternalEventSource(fields: string[], params?: Record<string, any>, pathOverride?: string | null): Promise<ProductCatalog>;
    getFlights(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    getHomeListings(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    createHomeListing(fields: string[], params?: Record<string, any>, pathOverride?: string | null): Promise<HomeListing>;
    getHotelRoomsBatch(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    createHotelRoomsBatch(fields: string[], params?: Record<string, any>, pathOverride?: string | null): Promise<ProductCatalog>;
    getHotels(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    createHotel(fields: string[], params?: Record<string, any>, pathOverride?: string | null): Promise<Hotel>;
    createItemsBatch(fields: string[], params?: Record<string, any>, pathOverride?: string | null): Promise<ProductCatalog>;
    createLocalizedItemsBatch(fields: string[], params?: Record<string, any>, pathOverride?: string | null): Promise<ProductCatalog>;
    createMarketPlacePartnerSellersDetail(fields: string[], params?: Record<string, any>, pathOverride?: string | null): Promise<ProductCatalog>;
    getPricingVariablesBatch(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    createPricingVariablesBatch(fields: string[], params?: Record<string, any>, pathOverride?: string | null): Promise<ProductCatalog>;
    getProductFeeds(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    createProductFeed(fields: string[], params?: Record<string, any>, pathOverride?: string | null): Promise<ProductFeed>;
    getProductGroups(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    createProductGroup(fields: string[], params?: Record<string, any>, pathOverride?: string | null): Promise<ProductGroup>;
    getProductSets(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    createProductSet(fields: string[], params?: Record<string, any>, pathOverride?: string | null): Promise<ProductSet>;
    getProductSetsBatch(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    getProducts(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    createProduct(fields: string[], params?: Record<string, any>, pathOverride?: string | null): Promise<ProductItem>;
    getVehicleOffers(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    getVehicles(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    createVehicle(fields: string[], params?: Record<string, any>, pathOverride?: string | null): Promise<Vehicle>;
    getVersionConfigs(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    createVersionItemsBatch(fields: string[], params?: Record<string, any>, pathOverride?: string | null): Promise<ProductCatalog>;
    delete(fields: string[], params?: Record<string, any>): Promise<AbstractObject>;
    get(fields: string[], params?: Record<string, any>): Promise<ProductCatalog>;
    update(fields: string[], params?: Record<string, any>): Promise<ProductCatalog>;
}
