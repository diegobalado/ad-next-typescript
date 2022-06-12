import { User, Event } from '../interfaces'

/** Dummy user data. */
export const sampleUserData: User[] = [
  { id: 101, name: 'Alice' },
  { id: 102, name: 'Bob' },
  { id: 103, name: 'Caroline' },
  { id: 104, name: 'Dave' },
]

export const events: Event[] = [{ "id": "125_DH_29_5_22", "title": "DH - TRIPLE CORONA - 29.5.22", "pictures": ["DHP_001", "DHP_002", "DHP_004", "DHP_005", "DHP_008", "DHP_010", "DHP_011", "DHP_012", "DHP_013", "DHP_014", "DHP_015", "DHP_016", "DHP_017", "DHP_018", "DHP_019", "DHP_020", "DHP_022", "DHP_023", "DHP_024", "DHP_025", "DHP_026", "DHP_027", "DHP_028", "DHP_029", "DHP_030", "DHP_031", "DHP_032", "DHP_033", "DHP_034", "DHP_036", "DHP_037", "DHP_038", "DHP_039", "DHP_040", "DHP_042", "DHP_044", "DHP_045", "DHP_047", "DHP_048", "DHP_051", "DHP_052", "DHP_053", "DHP_054", "DHP_055", "DHP_056", "DHP_057", "DHP_058", "DHP_059", "DHP_060", "DHP_061", "DHP_062", "DHP_063", "DHP_064", "DHP_069", "DHP_070", "DHP_071", "DHP_072", "DHP_074", "DHP_075", "DHP_076", "DHP_077", "DHP_078", "DHP_079", "DHP_080", "DHP_081", "DHP_082", "DHP_083", "DHP_084", "DHP_085", "DHP_086", "DHP_087", "DHP_088", "DHP_092", "DHP_094", "DHP_095", "DHP_096", "DHP_097", "DHP_098", "DHP_099", "DHP_100", "DHP_101", "DHP_102", "DHP_103", "DHP_104", "DHP_105", "DHP_106", "DHP_107", "DHP_108", "DHP_109", "DHP_110", "DHP_111", "DHP_112", "DHP_113", "DHP_114", "DHP_115", "DHP_116", "DHP_117", "DHP_118", "DHP_119", "DHP_120", "DHP_121", "DHP_122", "DHP_124", "DHP_125", "DHP_126", "DHP_127", "DHP_128", "DHP_129", "DHP_130", "DHP_131", "DHP_132", "DHP_134", "DHP_135", "DHP_136", "DHP_137", "DHP_139", "DHP_140", "DHP_141", "DHP_142", "DHP_143", "DHP_144", "DHP_145", "DHP_146", "DHP_147", "DHP_148", "DHP_150", "DHP_151", "DHP_152", "DHP_153", "DHP_154", "DHP_155", "DHP_156", "DHP_157", "DHP_158", "DHP_159", "DHP_160", "DHP_161", "DHP_162", "DHP_164", "DHP_165", "DHP_166", "DHP_168", "DHP_169", "DHP_170", "DHP_171", "DHP_172", "DHP_173", "DHP_174", "DHP_175", "DHP_177", "DHP_179", "DHP_180", "DHP_181", "DHP_183", "DHP_184", "DHP_187", "DHP_188", "DHP_189", "DHP_190", "DHP_191", "DHP_192", "DHP_193", "DHP_194", "DHP_195", "DHP_196", "DHP_197", "DHP_198", "DHP_199", "DHP_200", "DHP_201", "DHP_202", "DHP_203", "DHP_204", "DHP_205", "DHP_206", "DHP_207", "DHP_208", "DHP_209", "DHP_210", "DHP_211", "DHP_212", "DHP_213", "DHP_214", "DHP_215", "DHP_216", "DHP_217", "DHP_218", "DHP_219", "DHP_220", "DHP_221", "DHP_222", "DHP_223", "DHP_224", "DHP_225", "DHP_226", "DHP_227", "DHP_228", "DHP_229", "DHP_230", "DHP_231", "DHP_232", "DHP_233", "DHP_234", "DHP_235", "DHP_236", "DHP_237", "DHP_238", "DHP_239", "DHP_240", "DHP_241", "DHP_242", "DHP_243", "DHP_244", "DHP_245", "DHP_246", "DHS_001", "DHS_002", "DHS_003", "DHS_004", "DHS_005", "DHS_006", "DHS_007", "DHS_008", "DHS_009", "DHS_010", "DHS_011-82", "DHS_012", "DHS_013", "DHS_014-103", "DHS_015", "DHS_016-53", "DHS_017-96", "DHS_018-123", "DHS_019-121", "DHS_020-101", "DHS_021", "DHS_022", "DHS_023-89", "DHS_024", "DHS_025", "DHS_026", "DHS_027", "DHS_028", "DHS_029", "DHS_030-9", "DHS_031-121", "DHS_032-89", "DHS_033-136", "DHS_034-53", "DHS_035-82", "DHS_036-6", "DHS_037", "DHS_038-122", "DHS_039-123", "DHS_040-80", "DHS_041-132", "DHS_042-95", "DHS_043-71", "DHS_044-93", "DHS_045-97", "DHS_047-112", "DHS_048-13", "DHS_049", "DHS_050-101", "DHS_051-48", "DHS_052-100", "DHS_053-27", "DHS_054", "DHS_055-19", "DHS_056-113", "DHS_057-47", "DHS_059", "DHS_060-51", "DHS_061-34", "DHS_062", "DHS_064", "DHS_065-22", "DHS_066-96", "DHS_067-71", "DHS_068", "DHS_069-95", "DHS_070-104", "DHS_071", "DHS_072-93", "DHS_073-5", "DHS_074-52", "DHS_075-127", "DHS_076-121", "DHS_077-100", "DHS_078-132", "DHS_079-89", "DHS_080-108", "DHS_081-413", "DHS_082-112", "DHS_083-13", "DHS_084-114", "DHS_085-94", "DHS_086-106", "DHS_087", "DHS_088-136", "DHS_089-81", "DHS_090-110", "DHS_092-19", "DHS_094-47", "DHS_095-113", "DHS_096-110", "DHS_098-101", "DHS_100", "DHS_101-104", "DHS_102-71", "DHS_103-99", "DHS_104-141", "DHS_105-93", "DHS_106-95", "DHS_107-100", "DHS_108-121", "DHS_109-85", "DHS_110-52", "DHS_111-123", "DHS_112-51", "DHS_113-94", "DHS_114-2", "DHS_115-89", "DHS_116-3", "DHS_117-112", "DHS_118-114", "DHS_119-22", "DHS_120-102", "DHS_121-34", "DHS_122-47", "DHS_123-48", "DHS_124-48", "DHS_125-53", "DHS_126-53", "DHS_127-82", "DHS_128-22", "DHS_130-52", "DHS_131-38", "DHS_133-51", "DHS_134-13", "DHS_137-6", "DHS_139-5", "DHS_140-3", "DHS_141-2", "DHS_142-80", "DHS_143-27", "DHS_144-89", "DHS_145-106", "DHS_147-121", "DHS_148-122", "DHS_149-123", "DHS_150-127", "DHS_151-132", "DHS_152-138", "DHS_153-141", "DHS_154-96", "DHS_155-108", "DHS_156-109", "DHS_157-107", "DHS_158-9", "DHS_159-110", "DHS_160-112", "DHS_161-113", "DHS_162-114", "DHS_163-102", "DHS_164-101", "DHS_167-104", "DHS_168-104", "DHS_170-100", "DHS_171-100", "DHS_172-84", "DHS_173-103", "DHS_174-93", "DHS_175-94", "DHS_176-95", "DHS_177-97", "DHS_178-98", "DHS_179-99", "DHS_180-90", "DHS_181-71", "DHS_182-71", "DHS_183-81", "DHS_184-83", "DHS_185-85", "DHS_186-34", "DHS_188-19", "DHS_189-53", "DHS_190-82", "DHS_191-22", "DHS_193-38", "DHS_194-38", "DHS_195-51", "DHS_196-13", "DHS_197-6", "DHS_198-52", "DHS_199-5", "DHS_200-3", "DHS_201-2", "DHS_203-89", "DHS_204-106", "DHS_205-106", "DHS_206-136", "DHS_207-121", "DHS_208-122", "DHS_209-123", "DHS_210-127", "DHS_211-132", "DHS_212-138", "DHS_213-141", "DHS_214-141", "DHS_215-91", "DHS_216-91", "DHS_217-96", "DHS_218-108", "DHS_219-109", "DHS_220-107", "DHS_221-9", "DHS_222-110", "DHS_223-112", "DHS_224-112", "DHS_225-113", "DHS_227-114", "DHS_228-114", "DHS_230-102", "DHS_233-101", "DHS_235-100", "DHS_236-100", "DHS_237-84", "DHS_238-84", "DHS_239-103", "DHS_240-93", "DHS_241-93", "DHS_242-94", "DHS_243-94", "DHS_244-94", "DHS_245-95", "DHS_246-97", "DHS_247-98", "DHS_248-90", "DHS_249-71", "DHS_250-81", "DHS_251-83", "DHS_252-85"], "ads": [{ "name": "MarcoBikesWeb.jpg", "href": "https:\/\/marcovecchiobikes.com\/" }, { "name": "ZTheParcaWeb.jpg", "href": "https:\/\/www.facebook.com\/TheParca-Moto-Graphics-1482207455406338\/" }], "price": "350", "promo": "1500", "search": "true", "ph": "JPF" }
]
