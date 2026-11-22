# Data shown on this site

Data: Sophelio/fusion-equilibrium-challenge (Hugging Face), CC BY 4.0. DIII-D data courtesy of General Atomics.

Everything under `data/` is derived from public DIII-D **training** files of that dataset. It is reference data
(EFIT labels and public inputs) or the output of the official scorer (`fusion_scoring`, version 3.2.0) run on that
reference data. No model prediction and no MAST data are included.

Changes made to the original data:

- `replay.json` + `replay.bin`: two training shots (`d3d_shot_0f44bf0b0e`, normal plasma current, and
  `d3d_shot_49a6bf6191`, reversed plasma current). Every third EFIT slice is kept. The flux maps are stored as
  16-bit integers (maximum quantisation error below 1e-5 V·s/rad). Coil currents are linearly interpolated onto
  the EFIT times. The seven shape numbers and the boundary polygon per frame come from the official scorer.
- `pca.json` + `pca.bin`: a 16-component principal-component basis fitted for this site on 48 randomly drawn
  training shots (3,252 frames), with the coefficients of the replay frames.
- `timeaxis.json`: one older training shot (`d3d_shot_48793a9a2b`) with its plasma-current trace on the shipped
  and on the repaired time axis, binned to 1.5 ms, and counts over the 7,041 training shots.
- `mirror.json`: which of the 789 input features of the entry change sign when all currents are reversed.

The machine drawings use public coil and first-wall descriptions. The plasma models that respond to the controls
are simplified toy models, labelled as such where they appear.

Code of the entry (MIT): https://github.com/zhouyi-xiaoxiao/fusion-equilibrium-challenge-2026

## Machine geometry

- Coil, solenoid and magnetic-probe positions: EFIT machine description files (EFUND `mhdin`) for DIII-D and MAST,
  as distributed with the OMAS support files.
- DIII-D first wall: the DIII-D wall of FreeGS 0.8.2.
- MAST first wall: EFIT limiter `lim_mast.010_M4` from FAIR-MAST, CC BY-SA 4.0.
