/**
 * Creates a 3D rectangle.
 */
/**
 * ============================================================================
 * IMPORTS
 * ============================================================================
 * @hidden
 */
import { Container, IContainerProperties, IContainerAdapters, IContainerEvents } from "../../Container";
import { Sprite } from "../../Sprite";
/**
 * ============================================================================
 * REQUISITES
 * ============================================================================
 * @hidden
 */
/**
 * Defines properties for [[Rectangle3D]].
 */
export interface Rectangle3DProperties extends IContainerProperties {
    /**
     * Depth (Z dimension) of the 3D rectangle in pixels.
     *
     * @default 30
     */
    depth?: number;
    /**
     * Angle of the point of view to the 3D element. (0-360)
     *
     * @default 30
     */
    angle?: number;
}
/**
 * Defines events for [[Rectangle3D]]
 */
export interface Rectangle3DEvents extends IContainerEvents {
}
/**
 * Defines adapters for [[Rectangle3D]].
 *
 * @see {@link Adapter}
 */
export interface Rectangle3DAdapters extends IContainerAdapters, Rectangle3DProperties {
}
/**
 * ============================================================================
 * MAIN CLASS
 * ============================================================================
 * @hidden
 */
/**
 * Builds a 3D rectangle
 * @see {@link IRectangle3DEvents} for a list of available events
 * @see {@link IRectangle3DAdapters} for a list of available Adapters
 */
export declare class Rectangle3D extends Container {
    /**
     * Defines available properties.
     */
    _properties: Rectangle3DProperties;
    /**
     * Defines available adapters.
     */
    _adapter: Rectangle3DAdapters;
    /**
     * Defines available events.
     */
    _events: Rectangle3DEvents;
    /**
     * Left side element.
     *
     * @ignore Exclude from docs
     */
    sideLeft: Sprite;
    /**
     * Right side element.
     *
     * @ignore Exclude from docs
     */
    sideRight: Sprite;
    /**
     * Top element.
     *
     * @ignore Exclude from docs
     */
    sideTop: Sprite;
    /**
     * Bottom element.
     *
     * @ignore Exclude from docs
     */
    sideBottom: Sprite;
    /**
     * Back element.
     *
     * @ignore Exclude from docs
     */
    sideBack: Sprite;
    /**
     * Front element.
     *
     * @ignore Exclude from docs
     */
    sideFront: Sprite;
    /**
     * Constructor
     */
    constructor();
    /**
     * Draws the element.
     *
     * @ignore Exclude from docs
     */
    draw(): void;
    /**
     * @return Depth (px)
     */
    /**
     * Depth (Z dimension) of the 3D rectangle in pixels.
     *
     * @default 30
     * @param value  Depth (px)
     */
    depth: number;
    /**
     * @return Angle
     */
    /**
     * Angle of the point of view to the 3D element. (0-360)
     *
     * @default 30
     * @param value  Angle
     */
    angle: number;
}
