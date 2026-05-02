# IMG_SOLETA_INTERIOR_RENDER_TO_PHOTO_V1

**Pipeline:** Interior render → photorealistic output  
**Base model:** SD 1.5  
**Control:** M-LSD Lines (structural geometry)  
**Style:** IPAdapter Plus (style reference transfer)

---

## Required Custom Nodes

Install via **ComfyUI Manager** or clone manually:

| Node Pack | GitHub | Purpose |
|-----------|--------|---------|
| `comfyui_controlnet_aux` | `Fannovel16/comfyui_controlnet_aux` | M-LSD Lines preprocessor |
| `ComfyUI_IPAdapter_plus` | `cubiq/ComfyUI_IPAdapter_plus` | IPAdapter Unified Loader + IPAdapter nodes |

### Verify installation
In ComfyUI Manager → "Custom Nodes" tab — both packs must show as **Installed / Enabled**.

---

## Required Models

All paths below are relative to your configured base path:  
`H:\IMAGINAIRE PROJECTS\Models\`  
(as defined in `extra_model_paths.yaml`)

| Model | Folder | Filename |
|-------|--------|----------|
| Realistic Vision V6 | `.` or `checkpoints/sd1.5/` | `Realistic_Vision_V6.0_NV_B1.safetensors` |
| MLSD ControlNet | `ControlNet/` | `control_v11p_sd15_mlsd_fp16.safetensors` |
| IPAdapter Plus SD1.5 | `ipadapter/` (inside custom node folder) | `ip-adapter-plus_sd15.bin` |
| CLIP Vision (for IPA) | `clip_vision/` | `clip_vision_g.safetensors` or `clip_vit_h.safetensors` |

> **IPAdapter models** are loaded automatically by `IPAdapterUnifiedLoader` from the `ComfyUI_IPAdapter_plus/models/` folder or the ComfyUI `models/ipadapter/` directory. Download from the [cubiq/ComfyUI_IPAdapter_plus releases](https://github.com/cubiq/ComfyUI_IPAdapter_plus) page.

---

## Node Class Name Reference & Known Mismatches

Some node class names vary between ComfyUI_IPAdapter_plus versions. If you see red "missing node" errors, refer to this table:

| This workflow uses | Possible alternative name | Notes |
|--------------------|--------------------------|-------|
| `M-LSD Lines Detector` | `MLSDdetector`, `AIO_Preprocessor` (set preprocessor to MLSD) | comfyui_controlnet_aux ≥ 1.4 uses the long name |
| `IPAdapterUnifiedLoader` | `IPAdapterUnifiedLoaderCommunity` | Older versions of cubiq pack |
| `IPAdapter` | `IPAdapterAdvanced` | Advanced node has identical inputs; swap freely |
| `ControlNetApplyAdvanced` | `ControlNetApply` | Basic node lacks start/end percent; use Advanced |

**If MLSD node is missing:** Replace node 5 with `AIO_Preprocessor`, set the `preprocessor` widget to `MLSD`, keep other settings identical.

---

## Workflow Parameters

### Fixed values (do not change for baseline)

| Parameter | Value | Reason |
|-----------|-------|--------|
| Resolution | 768 × 768 | SD 1.5 native, MLSD optimal res |
| Steps | 32 | Balanced quality / speed |
| CFG | 6.5 | Avoids prompt burn at mid denoise |
| Sampler | dpmpp_2m_sde | Best quality for img2img-style |
| Scheduler | normal | Stable baseline |
| Denoise | 0.70 | Preserves structure while adding style |
| MLSD score_threshold | 0.10 | Captures fine room lines |
| MLSD dist_threshold | 10.0 | Filters noise from line map |

### Tunable values

| Parameter | Default | Range | Effect |
|-----------|---------|-------|--------|
| ControlNet strength | 0.75 | 0.50 – 0.95 | Higher = stricter geometry |
| ControlNet end_percent | 0.85 | 0.70 – 1.00 | Higher = CN active longer |
| IPAdapter weight | 0.55 | 0.35 – 0.80 | Higher = stronger style bleed |
| IPAdapter end_at | 0.85 | 0.60 – 1.00 | Higher = style active longer |
| Denoise | 0.70 | 0.55 – 0.85 | Lower = closer to source render |
| CFG | 6.5 | 5.0 – 8.0 | Lower = softer, Higher = prompt push |

---

## 3×3 Test Matrix

Run all 9 combinations and rate each output on the QC checklist below.

|  | **IPA 0.45** | **IPA 0.55** *(default)* | **IPA 0.70** |
|--|-------------|--------------------------|-------------|
| **CN 0.65** | A1 | A2 | A3 |
| **CN 0.75** *(default)* | B1 | **B2 ← start here** | B3 |
| **CN 0.90** | C1 | C2 | C3 |

**Record for each cell:** geometry integrity (1–5), style match (1–5), realism (1–5).  
Target: B2 as baseline. Move toward A-row if geometry breaks; toward C-row if structure is too loose. Move toward right column if style is too weak; left if style overpowers texture.

---

## Soleta QC Checklist

After each run, check all items before accepting output:

### Geometry
- [ ] Walls are flat and plumb (no wavy or bowing surfaces)
- [ ] Floor-wall junction is clean and continuous
- [ ] Ceiling is level, no melting or warping
- [ ] Windows/doors have correct rectangular shape and placement
- [ ] Room perspective is consistent (single vanishing point for orthogonal views)
- [ ] No duplicated or floating structural elements

### Style Match
- [ ] Warm natural wood tone visible (not orange lacquer)
- [ ] Matte mineral walls (not glossy paint)
- [ ] Soft natural daylight from windows (not studio flash)
- [ ] Neutral warm palette (not cool grey or saturated)
- [ ] Furniture is understated and handcrafted in feel (not hotel stock)
- [ ] At least one textile (linen, wool) visible and realistic

### Realism
- [ ] Wood grain has natural variation (not tiled or plastic)
- [ ] Shadows are soft and directionally consistent
- [ ] No HDR glow or overexposed highlights
- [ ] Material edges are crisp at correct scale
- [ ] No AI texture noise patterns (splotchy or melted areas)
- [ ] Overall could pass as editorial photography

---

## Validation Steps (Manual)

1. Open `IMG_SOLETA_INTERIOR_RENDER_TO_PHOTO_V1.json` in ComfyUI (drag-drop or Load button)
2. Check for red node headers — these indicate missing node classes (see mismatch table above)
3. Verify both `LoadImage` nodes are populated (node 4 = structure render, node 10 = style reference photo)
4. In node 5 (MLSD), confirm `score_threshold` = 0.10, `dist_threshold` = 10.0, `resolution` = 768
5. In node 8 (ControlNetApplyAdvanced), confirm strength = 0.75, start = 0.00, end = 0.85
6. In node 11 (IPAdapter), confirm weight = 0.55, start_at = 0.00, end_at = 0.85
7. Click **Queue Prompt**
8. Observe node 6 (MLSD Preview) — should show clean line-map of the room structure
9. Observe node 16 (Output Preview) — check against QC checklist
10. Note any console errors and cross-reference with mismatch table

---

## Recommended Input Images

**BASE_INTERIOR_STRUCTURE (node 4):**
- Clean 3D render or architectural visualization
- Orthographic or mild perspective (avoid fisheye)
- Neutral lighting preferred (no dramatic shadows in source)
- Format: PNG or JPG, minimum 768×768

**STYLE_REFERENCE (node 10):**
- High-quality editorial interior photograph
- Soleta-style: timber, warm neutral, natural light
- Avoid images with very different room geometry than the render
- Format: PNG or JPG, any resolution (will be resized internally)

---

## Output

Saved to ComfyUI `output/` folder as:  
`IMG_SOLETA_INTERIOR_V1_XXXXX_.png`

Also previewed in real-time in node 16 (PreviewImage).
